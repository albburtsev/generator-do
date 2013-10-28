/**
 * CsGenerator
 * @author Alexander Burtsev
 * @see {@link https://github.com/albburtsev/generator-do/tree/master/cs}
 */

'use strict';

var	util = require('util'),
	Root = require('../root');

/**
 * Generator for ```yo do:cs``` interface
 * @name CsGenerator
 * @since 0.0.0
 * @param {Object} args
 * @param {Object} options
 * @param {Object} config
 * @augments Root
 */
var CsGenerator = function(args, options, config) {
	Root.apply(this, arguments);
	this.log('You called the ```cs``` sub-generator:\n');
};

util.inherits(CsGenerator, Root);

/**
 * Prompts
 * @since 0.0.0
 */
CsGenerator.prototype.askFor = function() {
	var	done = this.async(),
		prompts = [{
			type: 'confirm',
			name: 'isNode',
			message: 'Do you write node.js module?',
			default: false
		}, {
			type: 'confirm',
			name: 'gruntJsHint',
			message: 'Do you want install grunt-contrib-jshint?',
			default: false
		}, {
			type: 'confirm',
			name: 'gruntJscs',
			message: 'Do you want install grunt-jscs-checker?',
			default: false
		}];

	this.prompt(prompts, function(props) {
		this._.extend(this, props);
		done();
	}.bind(this));
};

/**
 * Creates files from templates
 * @since 0.0.0
 */
CsGenerator.prototype.files = function() {
	this.copy('jscs.json', '.jscs.json');
	this.template('jshintrc', '.jshintrc');
};

/**
 * Installs npm for grunt tasks
 * @since 0.0.0
 */
CsGenerator.prototype.gruntNpm = function() {
	if ( !this.gruntJsHint && !this.gruntJscs ) {
		return false;
	}

	this.npmInstall(['grunt', 'matchdep'], { 'save-dev': true });

	if ( this.gruntJsHint ) {
		this.npmInstall(['grunt-contrib-jshint'], { 'save-dev': true });
		// @todo: update Gruntfile
	}

	if ( this.gruntJscs ) {
		this.npmInstall(['grunt-jscs-checker'], { 'save-dev': true });
		// @todo: update Gruntfile
	}
};

module.exports = CsGenerator;

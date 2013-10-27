/**
 * SubGenerator
 * @author Alexander Burtsev http://burtsev.me
 * @see {@link https://github.com/albburtsev/generator-do/tree/master/sub}
 */

'use strict';

var	util = require('util'),
	Root = require('../root');

/**
 * Generator for ```yo do:sub``` interface
 * @name SubGenerator
 * @since 0.0.0
 * @param {Object} args
 * @param {Object} options
 * @param {Object} config
 * @augments Root
 */
var SubGenerator = function(args, options, config) {
	Root.apply(this, arguments);
	this.log('You called the ```sub``` sub-generator:\n');
};

util.inherits(SubGenerator, Root);

/**
 * Prompts
 * @since 0.0.0
 */
SubGenerator.prototype.askFor = function() {
	var	done = this.async(),
		prompts = [{
			name: 'name',
			message: 'Sub-generator name',
			filter: function(input) {
				return this._.trim(input);
			}.bind(this),
			validate: function(input) {
				input = this._.trim(input);
				return !!input;
			}.bind(this)
		}, {
			name: 'description',
			message: 'Briefly about sub-generator',
			default: ''
		}, {
			type: 'confirm',
			name: 'withPrompts',
			message: 'Do you need prompts?',
			default: true
		}, {
			type: 'confirm',
			name: 'withScreenshot',
			message: 'Do you have screenshot?',
			default: true
		}];

	this.prompt(prompts, function(props) {
		this._.extend(this, props, {
			className: this._.classify(props.name) + 'Generator'
		});
		done();
	}.bind(this));
};

SubGenerator.prototype.files = function() {
	var dirname = this.name + '/';
	this.mkdir(dirname);
	this.template('sub.index.js', dirname + 'index.js');
	this.template('sub.README.md', dirname + 'README.md');
};

module.exports = SubGenerator;

/**
 * JsGenerator
 * @author Alexander Burtsev
 * @see {@link https://github.com/albburtsev/generator-do/tree/master/js}
 */

'use strict';

var	util = require('util'),
	Root = require('../root');

/**
 * Generator for ```yo do:js``` interface
 * @name JsGenerator
 * @since 0.0.0
 * @param {Object} args
 * @param {Object} options
 * @param {Object} config
 * @augments Root
 */
var JsGenerator = function(args, options, config) {
	Root.apply(this, arguments);
	this.log('You called the ```js``` sub-generator:\n');
};

util.inherits(JsGenerator, Root);


/**
 * Prompts
 * @since 0.0.0
 */
JsGenerator.prototype.askFor = function() {
	var	done = this.async(),
		prompts = [{
			name: 'name',
			message: 'File name (without extension)',
			default: 'script'
		}, {
			name: 'description',
			message: 'Couple words about this script',
			default: ''
		}, {
			type: 'confirm',
			name: 'withBanner',
			message: 'Do you need banner?',
			default: false
		}, {
			type: 'confirm',
			name: 'withAMD',
			message: 'Do you need AMD-wrapper?',
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
JsGenerator.prototype.files = function() {
	this.template('script.js', this.name + '.js');
};

module.exports = JsGenerator;

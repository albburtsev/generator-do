/**
 * HtmlGenerator
 * @author Alexander Burtsev http://burtsev.me
 * @see {@link https://github.com/albburtsev/generator-do/tree/master/html}
 */

'use strict';

var util = require('util'),
	Root = require('../root');

/**
 * Generator for ```yo do:html``` interface
 * @name HtmlGenerator
 * @since 0.0.0
 * @param {Object} args
 * @param {Object} options
 * @param {Object} config
 * @augments Root
 */
var HtmlGenerator = function(args, options, config) {
	Root.apply(this, arguments);
	this.log('You called the ```do:html``` sub-generator:\n');
};

util.inherits(HtmlGenerator, Root);

/**
 * Prompts for HTML file creating
 * @since 0.0.0
 */
HtmlGenerator.prototype.askFor = function() {
	var	done = this.async(),
		prompts = [{
			name: 'filename',
			message: 'File name',
			default: 'index'
		}, {
			name: 'title',
			message: 'Page title',
			default: ''
		}, {
			type: 'confirm',
			name: 'isSEO',
			message: 'Do you need SEO meta-tags?',
			default: false
		}, {
			type: 'confirm',
			name: 'withBootstrap',
			message: 'Do you need Twitter Bootstrap?',
			default: false
		}];

	this.prompt(prompts, function(props) {
		this._.extend(this, props);
		done();
	}.bind(this));
};

/**
 * Creates file from template
 * @since 0.0.0
 */
HtmlGenerator.prototype.files = function() {
	this.template('index.html', this.filename + '.html');
};

module.exports = HtmlGenerator;

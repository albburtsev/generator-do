'use strict';

var _ = require('lodash'),
	util = require('util'),
	BaseGenerator = require('../app/index');


var HtmlGenerator = function(args, options, config) {
	BaseGenerator.apply(this, arguments);
	console.log('You called the html subgenerator:\n');
};

util.inherits(HtmlGenerator, BaseGenerator);

HtmlGenerator.prototype.askFor = function askFor() {
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
		_.extend(this, props);
		done();
	}.bind(this));
}

HtmlGenerator.prototype.files = function files() {
	this.template('index.html', this.filename + '.html');
};

module.exports = HtmlGenerator;

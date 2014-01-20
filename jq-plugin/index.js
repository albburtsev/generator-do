/**
 * JqPluginGenerator
 * @author Alexander Burtsev
 * @see {@link https://github.com/albburtsev/generator-do/tree/master/jq-plugin}
 */

'use strict';

var	util = require('util'),
	Root = require('../root');

/**
 * Generator for ```yo do:jq-plugin``` interface
 * @name JqPluginGenerator
 * @since 0.0.1
 * @param {Object} args
 * @param {Object} options
 * @param {Object} config
 * @augments Root
 */
var JqPluginGenerator = function(args, options, config) {
	Root.apply(this, arguments);
	this.log('You called the ```jq-plugin``` sub-generator:\n');
};

util.inherits(JqPluginGenerator, Root);


/**
 * Prompts
 * @since 0.0.1
 */
JqPluginGenerator.prototype.askFor = function() {
	var	done = this.async(),
		prompts = [{
			name: 'name',
			message: 'Plugin file prefix (without .jquery.js)',
			default: 'plugin'
		}, {
			name: 'method',
			message: 'Method name',
			default: 'plugin'
		}, {
			name: 'description',
			message: 'Couple words about this plugin',
			default: 'jQuery plugin'
		}];

	this.prompt(prompts, function(props) {
		this._.extend(this, props, {
			className: this._.classify(props.name)
		});
		done();
	}.bind(this));
};


/**
 * Creates files from templates
 * @since 0.0.1
 */
JqPluginGenerator.prototype.files = function() {
	this.template('jq-plugin.js', this.name + '.jquery.js');
};

module.exports = JqPluginGenerator;

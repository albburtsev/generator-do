/**
 * RcGenerator
 * @author Alexander Burtsev
 * @see {@link https://github.com/albburtsev/generator-do/tree/master/rc}
 */

'use strict';

var	util = require('util'),
	Root = require('../root');

/**
 * Generator for ```yo do:rc``` interface
 * @name RcGenerator
 * @since 0.0.2
 * @param {Object} args
 * @param {Object} options
 * @param {Object} config
 * @augments Root
 */
var RcGenerator = function(args, options, config) {
	Root.apply(this, arguments);
	this.log('You called the ```rc``` sub-generator:\n');
};

util.inherits(RcGenerator, Root);


/**
 * Prompts
 * @since 0.0.2
 */
RcGenerator.prototype.askFor = function() {
	var	done = this.async(),
		prompts = [{
			name: 'name',
			message: 'component name (CamelCased)',
			default: 'DefaultComponent'
		}];

	this.prompt(prompts, function(props) {
		this._.extend(this, props, {
			className: this._.underscored(props.name).replace(/_/g, '-')
		});
		done();
	}.bind(this));
};


/**
 * Creates files from templates
 * @since 0.0.2
 */
RcGenerator.prototype.files = function() {
	var dirname = this.name + '/',
		filename = dirname + this.name;

	this.mkdir(dirname);
	this.mkdir(dirname + 'icons/');
	this.template('rc.component.jsx', filename + '.jsx');
	this.template('rc.component.styl', filename + '.styl');
};

module.exports = RcGenerator;

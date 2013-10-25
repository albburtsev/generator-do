/**
 * DoGenerator class, entry point of project
 * @author Alexander Burtsev http://burtsev.me
 * @see {@link https://github.com/albburtsev/generator-do}
 */

'use strict';

var util = require('util'),
	Root = require('../root');

/**
 * Generator for ```yo do``` interface
 * @name DoGenerator
 * @since 0.0.0
 * @param {Object} args
 * @param {Object} options
 * @param {Object} config
 * @augments Root
 */
var DoGenerator = function(args, options, config) {
	Root.apply(this, arguments);
};

util.inherits(DoGenerator, Root);

/**
 * Prints help about sub-generators
 * @since 0.0.0
 */
DoGenerator.prototype.printHelp = function() {
	this.log('\nCommand ```yo do``` do nothing. Or not?');
	this.log('It is only help. List of available sub-generators:\n');

	// @todo: automatic generation subtask list
	this.log(' * ```yo do:html``` - creates a simple HTML file');
	this.log('\nRun ```npm update -g generator-do``` to get more generators!');
};

module.exports = DoGenerator;

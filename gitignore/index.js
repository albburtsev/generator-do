/**
 * GitignoreGenerator
 * @author Alexander Burtsev
 * @see {@link https://github.com/albburtsev/generator-do/tree/master/gitignore}
 */

'use strict';

var	util = require('util'),
	Root = require('../root');

/**
 * Generator for ```yo do:gitignore``` interface
 * @name GitignoreGenerator
 * @since 0.0.0
 * @param {Object} args
 * @param {Object} options
 * @param {Object} config
 * @augments Root
 */
var GitignoreGenerator = function(args, options, config) {
	Root.apply(this, arguments);
	this.log('You called the ```gitignore``` sub-generator:\n');
};

util.inherits(GitignoreGenerator, Root);

/**
 * Creates files from templates
 * @since 0.0.0
 */
GitignoreGenerator.prototype.files = function() {
	this.template('gitignore', '.gitignore');
};

module.exports = GitignoreGenerator;

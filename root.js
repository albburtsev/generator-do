/**
 * Base class for all generators
 * @author Alexander Burtsev http://burtsev.me
 * @see {@link https://github.com/albburtsev/generator-do}
 */

'use strict';

var	util = require('util'),
	path = require('path'),
	chalk = require('chalk'),
	yeoman = require('yeoman-generator');

/**
 * All generator-do classes inherits from Root
 * @name Root
 * @since 0.0.0
 * @param {Object} args
 * @param {Object} options
 * @param {Object} config
 * @augments yeoman.generators.Base
 */
var Root = function(args, options, config) {
	yeoman.generators.Base.apply(this, arguments);

	// Get package.json
	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, 'package.json')));

	// Set root path and path to templates
	this.rootPath = path.join(__dirname);
	this.sourceRoot(path.join(this.rootPath, 'templates'));

	// Save original logging method
	this.originLog = Root.super_.prototype.log;
};

util.inherits(Root, yeoman.generators.Base);

/**
 * Pretty logging with {@link https://github.com/sindresorhus/chalk | chalk} highlighting for commands
 * @since 0.0.0
 * @param {String} msg Log message
 * @returns {Root} Returns context
 * @example
 * this.log('Command ```yo do``` do nothing. Or not?');
 */
Root.prototype.log = function(msg) {
	msg = (msg || '').replace(/```(.*?)```/g, function(matched, command) {
		return chalk.green(command);
	});

	arguments[0] = msg;
	this.originLog.apply(this, arguments);
	return this;
};

module.exports = Root;

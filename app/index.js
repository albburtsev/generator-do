/**
 * DoGenerator class, entry point of project
 * @author Alexander Burtsev http://burtsev.me
 * @see {@link https://github.com/albburtsev/generator-do}
 */

'use strict';

var util = require('util'),
	Root = require('../root'),
	path = require('path'),
	fs = require('fs');

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
	var yodoRoot = path.join(__dirname, '..'),
		yodoFiles = fs.readdirSync(yodoRoot);

	this.log('\nCommand ```yo do``` do nothing. Or not?');
	this.log('It is only help. List of available sub-generators:\n');

	yodoFiles.forEach((function(dirname) {
		dirname = path.join(yodoRoot, dirname);
		if ( fs.statSync(dirname).isDirectory() ) {
			var indexFile = path.join(dirname, 'index.js'),
				readmeFile = path.join(dirname, 'README.md'),
				readmeText, readmeMatched,
				readmeRe = /\#\s+(.*?)\n\n(.*?)\.\n/im;

			if ( fs.existsSync(indexFile) && fs.existsSync(readmeFile) ) {
				readmeText = fs.readFileSync(readmeFile, { encoding: 'utf8' });
				if ( readmeMatched = readmeText.match(readmeRe) ) {
					this.log(' * ```yo ' + readmeMatched[1] + '``` - ' + readmeMatched[2].toLowerCase());
				}
			}
		}
	}).bind(this));

	this.log('\nRun ```npm update -g generator-do``` to get more generators!');
};

module.exports = DoGenerator;

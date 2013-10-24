'use strict';

var util = require('util'),
	path = require('path'),
	chalk = require('chalk'),
	yeoman = require('yeoman-generator'),
	grunt = require('grunt');

var DoGenerator = function(args, options, config) {
	yeoman.generators.Base.apply(this, arguments);

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

	// Set root path and path to templates
	this.rootPath = path.join(__dirname, '..');
	this.sourceRoot(path.join(this.rootPath, 'templates'));
};

util.inherits(DoGenerator, yeoman.generators.Base);

DoGenerator.prototype.printHelp = function askFor() {
	console.log('\nCommand ' + chalk.green('yo do') + ' do nothing. Or not?');
	console.log('It is only help. List of available sub-generators:\n');

	// @todo: automatic generation subtask list
	console.log(chalk.green('yo do:html') + ' - creates simple HTML file');
	console.log('\nRun ' + chalk.green('npm update -g generator-do') + ' to get more generators!');
}

module.exports = DoGenerator;
/**
 * NginxSiteGenerator
 * @author Alexander Burtsev
 * @see {@link https://github.com/albburtsev/generator-do/tree/master/nginx-site}
 */

'use strict';

var	fs = require('fs'),
	path = require('path'),
	util = require('util'),
	Root = require('../root');

/**
 * Generator for ```yo do:nginx-site``` interface
 * @name NginxSiteGenerator
 * @since 0.0.2
 * @param {Object} args
 * @param {Object} options
 * @param {Object} config
 * @augments Root
 */
var NginxSiteGenerator = function(args, options, config) {
	Root.apply(this, arguments);
	this.log('You called the ```nginx-site``` sub-generator:\n');
};

util.inherits(NginxSiteGenerator, Root);


/**
 * Prompts
 * @since 0.0.2
 */
NginxSiteGenerator.prototype.askFor = function() {
	var	done = this.async(),
		prompts = [{
			name: 'confpath',
			message: 'Path to config',
			default: '/etc/nginx/',
			validate: function(input) {
				if ( !fs.existsSync(input) ) {
					return 'Path ```' + input + '``` does not exist';
				}
				return true;
			}
		}, {
			name: 'name',
			message: 'Server name',
			default: 'site.ru'
		}, {
			type: 'confirm',
			name: 'proxy',
			message: 'Is it proxy?',
			default: false
		}];

	this.prompt(prompts, function(props) {
		this._.extend(this, props);

		var	projectPath = '/home/sites/' + this.name + '/',
			logPath = projectPath + 'logs/',
			prompts;

		if ( this.proxy ) {
			prompts = [{
				name: 'proxy_pass',
				message: 'Proxy_pass',
				default: 'http://127.0.0.1:8081'
			}];
		} else {
			prompts = [{
				name: 'staticpath',
				message: 'Path to static root',
				default:  projectPath + 'www/'
			}];
		}

		this.prompt(prompts, function(props) {
			this._.extend(this, props);
			this.logPath = logPath;
			done();
		}.bind(this));
	}.bind(this));
};


/**
 * Creates files from templates
 * @since 0.0.2
 */
NginxSiteGenerator.prototype.files = function() {
	var configPath = this.name.toLowerCase() + '.conf';
	configPath = path.join(this.confpath, configPath);

	this.template('nginx-site.conf', configPath);
};

module.exports = NginxSiteGenerator;

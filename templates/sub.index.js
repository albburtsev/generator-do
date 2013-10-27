/**
 * <%= className %>
 * @author <%= pkg.author.name %>
 * @see {@link https://github.com/albburtsev/generator-do/tree/master/<%= name %>}
 */

'use strict';

var	util = require('util'),
	Root = require('../root');

/**
 * Generator for ```yo do:<%= name %>``` interface
 * @name <%= className %>
 * @since <%= pkg.version %>
 * @param {Object} args
 * @param {Object} options
 * @param {Object} config
 * @augments Root
 */
var <%= className %> = function(args, options, config) {
	Root.apply(this, arguments);
	this.log('You called the ```<%= name %>``` sub-generator:\n');
};

util.inherits(<%= className %>, Root);

<% if ( withPrompts ) { %>
/**
 * Prompts
 * @since <%= pkg.version %>
 */
<%= className %>.prototype.askFor = function() {
	var	done = this.async(),
		prompts = [];

	this.prompt(prompts, function(props) {
		this._.extend(this, props);
		done();
	}.bind(this));
};
<% } %>

module.exports = <%= className %>;

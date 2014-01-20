/**
 * <%= description %>
 * 
 * @author <%= pkg.author && pkg.author.name || pkg.author || ''  %>
 * @copyright <%= (new Date).getFullYear() %> <%= pkg.author && pkg.author.name || pkg.author || ''  %>
 * @license MIT
 */
(function(factory) {
	if ( typeof define === 'function' && define.amd ) {
		define(['jquery'], factory);
	} else {
		factory(jQuery);
	}
}(function($) {
	'use strict';
	
	$.fn.<%= method %> = function(opts) {
		return this.each(function() {
			new <%= className %>(this, opts);
		});
	}

	function <%= className %>(element, opts) {
		$.extend(this, {
			// Default options
		}, opts || {});
	}

	<%= className %>.prototype = {
		// Methods
	};
}));
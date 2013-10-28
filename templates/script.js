<% if ( withBanner ) { %>/**
 * <%= description %>
 * 
 * @author <%= pkg.author && pkg.author.name || pkg.author || ''  %>
 * @license MIT
 */
<% } %>
<% if ( withAMD ) { %>(function(factory) {
	if ( typeof define === 'function' && define.amd ) {
		define(factory);
	} else {
		factory();
	}
}(function() {
	'use strict';

	// @todo
}));
<% } else { %>
'use strict';

// @todo
<% } %>
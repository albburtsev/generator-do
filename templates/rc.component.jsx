'use strict';

require('./<%= name %>.styl');

var b = Block('<%= className %>');

/**
 * <%= name %> component
 */
var <%= name %> = React.createClass({
    render: function() {
        return (
            <div className={b}>
                Content of component «<%= name %>»
            </div>
        );
    }
});

module.exports = <%= name %>;

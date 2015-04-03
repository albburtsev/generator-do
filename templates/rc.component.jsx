var b = Block('<%= className %>');

/**
 * <%= name %> component
 */
var <%= name %> = React.createClass({
    getDefaultProps() {
        return {
            // @todo
        };
    },

    getInitialState() {
        return this.getStateFromStores();
    },

    getStateFromStores() {
        return {};
    },

    render() {
        return (
            <div className={b}>
                Content of component «<%= name %>»
            </div>
        );
    }
});

export default <%= name %>;

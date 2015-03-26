let b = Block('<%= className %>');

/**
 * <%= name %> component
 */
class <%= name %> extends React.Component {
    render() {
        return (
            <div className={b}>
                Content of component «<%= name %>»
            </div>
        );
    }
}

module.exports = <%= name %>;

var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(event) {
        var location = this.refs.location.value;

        if (location.length > 0) {
            this.props.onSearch(location);
            this.refs.location.value = '';
        }

        event.preventDefault();
    },

    render: function() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="location" placeholder="Enter city name"/>
                <button>Get Weather</button>
            </form>
        );
    }
});

module.exports = WeatherForm;

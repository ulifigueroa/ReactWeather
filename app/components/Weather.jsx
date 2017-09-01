var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        };
    },

    handleSearch: function(location) {
        var that = this;

        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function(temperature) {
            that.setState({
                location: location,
                temperature: temperature,
                isLoading: false
            });
        }, function(errorMessage) {
            this.setState({isLoading: false});
            alert(errorMessage);
        });
    },

    render: function() {
        var {isLoading, location, temperature} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>
            } else if (temperature && location) {
                return <WeatherMessage location={location} temperature={temperature}/>;
            }
        }

        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;

var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=fce18589968cde26d7883d709ba6b82a&units=metric';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(response) {
            return response.data.main.temp;
        }).catch(function (error) {
            switch (error.response.status) {
                case 404: {
                    throw new Error('City not found');
                }

                case 500: {
                    throw new Error('Server error');
                }

                default: {
                    throw new Error('Uknown error occurred', error);
                }
            }
        });
    }
};

var React = require('react');

var About = () => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a weather application build on React.</p>
            <p>Here are some of the tools I used:</p>
            <ul>
                <li><a href="https://facebook.github.io/react" target="_blank">React</a></li>
                <li><a href="https://openweathermap.org" target="_blank">Open Weather Map</a></li>
            </ul>
        </div>
    );
};

module.exports = About;

var React = require('react');
var {Link} = require('react-router');

var Examples = () => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Guadalajara,MX'>Guadalajara, MX</Link>
                </li>
                <li>
                    <Link to='/?location=Monterrey,MX'>Monterrey, MX</Link>
                </li>
                <li>
                    <Link to='/?location=Mexico City,MX'>Mexico City, MX</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;

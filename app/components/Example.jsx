var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p> Here are a few examples locations to try out:</p>
      <ol>
        <li>
          <Link to='/?locaton=Toronto'> Toronto, CA</Link>
        </li>
        <li>
          <Link to='/?locaton=Rio'> Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Example;

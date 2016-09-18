var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p> Here are a few examples locations to try out:</p>
      <ol>
        <li>
          <Link className="link" to='/?location=Toronto'> Toronto, CA</Link>
        </li>
        <li>
          <Link className="link" to='/?location=Rio'> Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Example;

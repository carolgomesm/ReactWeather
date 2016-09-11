var React = require('react');

var WeatherForm = React.createClass({
  render: function (){
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <input type="text" ref="location"></input>
          <button>Get Weather</button>
        </div>
      </form>
    );
  }
});

module.exports = WeatherForm;

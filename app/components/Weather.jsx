var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getDefaultProps: function(){
    return{
      message: " "
    };
  },
  render: function (){
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm></WeatherForm>
        <WeatherMessage></WeatherMessage>
      </div>
    );
  }
});

module.exports = Weather;

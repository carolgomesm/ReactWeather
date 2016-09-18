var React = require('react');


// var About = React.createClass({
//   render: function (){
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 clasName="text-center page-title">About</h1>
      <p>This is a weather application built using React. I have built this for the complete
      React Web App Developer Course</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a className="link" href="https://facebook.github.io/react">React</a> - This was the JavaScript Framework used
        </li>
        <li>
          <a className="link" href="https://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather.
        </li>
      </ul>
    </div>
  );
};
module.exports = About;

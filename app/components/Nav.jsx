var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function(e){
    e.preventDefault();
    var location = this.refs.search.value;
    var encodedLocation = encodeURIComponent(location);

    if(location.length > 0){
      this.refs.search.value = '';
      window.location.hash = '#/?location=' + encodedLocation;
    }
  },
  render: function(){
    return (
      <div className="top-bar my-nav">
        <div className="top-bar-left">
          <ul className="menu my-nav">
            <li className="menu-text title">React Weather App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle = {{fontWeight: 'bold', color:'#ff4081'}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle = {{fontWeight: 'bold', color:'#ff4081'}}>About</Link>
            </li>
            <li>
              <Link to="/example" activeClassName="active" activeStyle = {{fontWeight: 'bold', color:'#ff4081'}}>Example</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Search Weather by City" ref="search"></input>
              </li>
              <li>
                <input type="submit" className="hollow button" value="Get Weather"></input>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = Nav;

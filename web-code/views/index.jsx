var React = require('react');
// var DefaultLayout = require('./layouts/main');

var index = React.createClass({
  render: function() {
    return (
        <div>Hello {this.props.name}</div>
    );
  }
});

module.exports = index;
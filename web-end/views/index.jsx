'use strict';

var React = require('react');
var DefaultLayout = require('./layouts/main.jsx');

var index = React.createClass({
  displayName: 'index',

  render: function render() {
    return React.createElement(
      DefaultLayout,
      { title: this.props.title },
      React.createElement(
        'div',
        null,
        'Hello ',
        this.props.name
      )
    );
  }
});

module.exports = index;
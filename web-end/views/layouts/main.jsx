'use strict';

var React = require('react');

var DefaultLayout = React.createClass({
  displayName: 'DefaultLayout',

  render: function render() {
    return React.createElement(
      'html',
      null,
      React.createElement(
        'head',
        null,
        React.createElement(
          'title',
          null,
          this.props.title
        )
      ),
      React.createElement(
        'body',
        null,
        this.props.children
      )
    );
  }
});

module.exports = DefaultLayout;
'use strict';

var React = require('react');
// var DefaultLayout = require('./layouts/main');

var index = React.createClass({
  displayName: 'index',

  render: function render() {
    return React.createElement(
      'div',
      null,
      'Hello ',
      this.props.name
    );
  }
});

module.exports = index;
//# sourceMappingURL=index.js.map
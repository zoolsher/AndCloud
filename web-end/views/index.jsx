'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _main = require('./layouts/main.jsx');

var _main2 = _interopRequireDefault(_main);

var _header = require('./Modules/header.jsx');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = _react2.default.createClass({
  displayName: 'index',

  render: function render() {
    return _react2.default.createElement(
      _main2.default,
      { title: this.props.title },
      _react2.default.createElement(_header2.default, null),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('img', { src: '/public/image/mi3.png', alt: '手机外观图' })
      )
    );
  }
});

module.exports = index;
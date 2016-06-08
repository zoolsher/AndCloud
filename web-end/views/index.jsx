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
        { className: 'am-g' },
        _react2.default.createElement(
          'div',
          { className: 'am-u-md-3' },
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'am-input-group' },
            _react2.default.createElement('input', { type: 'text', className: 'am-form-field' }),
            _react2.default.createElement(
              'span',
              { className: 'am-input-group-btn' },
              _react2.default.createElement(
                'button',
                { className: 'am-btn am-btn-default', type: 'button' },
                _react2.default.createElement('span', { className: 'am-icon-search' }),
                ' '
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'am-list am-list-border' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                '百度手机浏览器'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                '锤子便签'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                '锤子日历'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                '锤子邮箱'
              )
            ),
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '#' },
                '手机淘宝'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'am-u-md-9' },
          _react2.default.createElement(
            'div',
            { className: 'am-g am-container' },
            _react2.default.createElement('br', null),
            _react2.default.createElement('img', { src: '/public/image/chrome.png', alt: '', className: 'am-img-thumbnail am-u-md-2 am-u-sm-2' }),
            _react2.default.createElement(
              'div',
              { className: 'am-u-md-10 am-u-sm-10' },
              _react2.default.createElement(
                'div',
                null,
                '应用名称：',
                _react2.default.createElement(
                  'code',
                  null,
                  'Chrome'
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                '版本号：',
                _react2.default.createElement(
                  'code',
                  null,
                  '10.0'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: '' },
                '大小：',
                _react2.default.createElement(
                  'code',
                  null,
                  '100MB(这么大怎么不去吃屎'
                )
              )
            )
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            'div',
            { className: 'am-u-sm-12' },
            _react2.default.createElement(
              'ul',
              { className: 'am-list am-list-static' },
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('i', { className: 'am-icon-upload am-icon-fw' }),
                '  上传成功',
                _react2.default.createElement(
                  'span',
                  { className: 'am-badge am-badge-success' },
                  _react2.default.createElement('i', { className: 'am-icon-check' })
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('i', { className: 'am-icon-laptop am-icon-fw' }),
                '  自动化检测流程',
                _react2.default.createElement(
                  'span',
                  { className: 'am-badge' },
                  _react2.default.createElement('i', { className: 'am-icon-spinner am-icon-pulse' })
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('i', { className: 'am-icon-keyboard-o am-icon-fw' }),
                '  手动化流程检测',
                _react2.default.createElement(
                  'span',
                  { className: 'am-badge' },
                  _react2.default.createElement('i', { className: 'am-icon-spinner am-icon-pulse' })
                )
              ),
              _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('i', { className: 'am-icon-file-o am-icon-fw' }),
                '  报告生成',
                _react2.default.createElement(
                  'span',
                  { className: 'am-badge' },
                  _react2.default.createElement('i', { className: 'am-icon-spinner am-icon-pulse' })
                )
              )
            )
          )
        )
      )
    );
  }
});

module.exports = index;
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _main = require('./layouts/main.jsx');

var _main2 = _interopRequireDefault(_main);

var _header = require('./Modules/header.jsx');

var _header2 = _interopRequireDefault(_header);

var _projectList = require('./Modules/projectList.jsx');

var _projectList2 = _interopRequireDefault(_projectList);

var _detail = require('./Modules/detail.jsx');

var _detail2 = _interopRequireDefault(_detail);

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
          _react2.default.createElement(_projectList2.default, { list: this.props.list, curPage: this.props.curPage, totalPage: this.props.totalPage })
        ),
        _react2.default.createElement(
          'div',
          { className: 'am-u-md-9' },
          _react2.default.createElement('br', null),
          _react2.default.createElement(_detail2.default, { detail: this.props.curDetail }),
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
                '  手动化检测流程',
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
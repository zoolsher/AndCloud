'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _adbkit = require('adbkit');

var _adbkit2 = _interopRequireDefault(_adbkit);

var _expressReactViews = require('express-react-views');

var _expressReactViews2 = _interopRequireDefault(_expressReactViews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var client = _adbkit2.default.createClient();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
var options = {
    beautify: true
};
app.engine('jsx', _expressReactViews2.default.createEngine(options));
app.get('/', require('./routes').index);
// app.get('/devicesList', (req, res) => {
//     client.listDevices()
//         .then(function(devices) {
//             res.send(JSON.stringify(devices));
//         })
//         .catch(function(err) {
//             console.error('Something went wrong:', err.stack)
//         });
// });

app.listen(3000);
//# sourceMappingURL=index.js.map
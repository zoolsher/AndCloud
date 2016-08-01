'use strict';

var _index = require('./../index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filename = '/Users/zoolsher/Downloads/smartisan_reader_v1.2.0.apk';
var aapt = new _index2.default();
aapt.analize(filename).then(function (res) {
    console.log('hand print :' + JSON.stringify(res));
    console.log('works fine');
    return null;
}).error(function (err) {
    console.log("err: " + err.toString());
});

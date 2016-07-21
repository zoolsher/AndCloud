'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var parser = require('./badging_parser');

var Aapt = function () {
    function Aapt() {
        _classCallCheck(this, Aapt);

        this.osJudge();
    }

    _createClass(Aapt, [{
        key: 'osJudge',
        value: function osJudge() {
            var curos = _os2.default.platform();
            switch (curos) {
                case "darwin":
                    //use the mac one
                    this.aaptPath = _config2.default['MACOS'];
                    break;
                case "win32":
                    //use windows
                    break;
                case "linux":
                    //use linux
                    break;
            }
        }
    }, {
        key: 'analize',
        value: function analize(apkAddress) {
            var order = './' + this.aaptPath + ' dump badging ' + apkAddress;
            return new _bluebird2.default(function (resolve, reject) {
                _shelljs2.default.exec(order, function (code, stdout, stderr) {
                    if (stderr) {
                        reject(code, stderr);
                    } else {
                        var res = parser.parse(stdout);
                        resolve(res);
                    }
                });
            });
        }
    }]);

    return Aapt;
}();

exports.default = Aapt;

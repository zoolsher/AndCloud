'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var adbkit = require('adbkit');
var client = adbkit.createClient();
var arraydiff = require('./tools/arraydiff');

var DeviceWatcher = function () {
    function DeviceWatcher(ep) {
        _classCallCheck(this, DeviceWatcher);

        this.devicesID = [];
        this.ep = ep;
        this.EVENT_LOOP_FINISH = 'EVENT_LOOP_FINISH';
        this.EVENT_DEVICE_DIFF = 'EVENT_DEVICE_DIFF';
    }

    _createClass(DeviceWatcher, [{
        key: 'checker',
        value: function checker() {
            var self = this;
            client.listDevices().then(function (devices) {
                var arr = [];
                devices.forEach(function ($) {
                    arr.push($['id']);
                });
                var res = arraydiff(self.devicesID, arr);
                self.devicesID = arr;
                if (Object.getOwnPropertyNames(res).length !== 0) {
                    self.ep.emit(self.EVENT_DEVICE_DIFF, res);
                }
                self.ep.emit(self.EVENT_LOOP_FINISH, '');
            }).catch(function (err) {
                console.log(err);
            });
        }
    }]);

    return DeviceWatcher;
}();

module.exports = DeviceWatcher;
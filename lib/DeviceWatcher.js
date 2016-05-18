'use strict';

var adbkit = require('adbkit');
var client = adbkit.createClient();
var arraydiff = require('./tools/arraydiff');

class DeviceWatcher {
    constructor(ep) {
        this.devicesID = [];
        this.ep = ep;
        this.EVENT_LOOP_FINISH = 'EVENT_LOOP_FINISH';
        this.EVENT_DEVICE_DIFF = 'EVENT_DEVICE_DIFF';
    }
    checker() {
        var self = this;
        client.listDevices().then(function (devices) {
            var arr = [];
            devices.forEach($ => {
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
}

module.exports = DeviceWatcher;
//# sourceMappingURL=DeviceWatcher.js.map
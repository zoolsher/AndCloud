'use strict';

var EventProxy = require('eventproxy');
var arraydiff = require('./tools/arraydiff');
var DeviceWatcher = require('./DeviceWatcher');

// var ep = new EventProxy();
// var d = new DeviceWatcher(ep);
// ep.on(d.EVENT_DEVICE_DIFF, function(res) {
//     console.log('------res-------');
//     console.log(res);
//     console.log('------devicesList-------');
//     console.log(d.devicesID);
// });
// ep.on(d.EVENT_LOOP_FINISH, function(data) {
//     setTimeout(function() {
//         d.checker();
//     }, 200);
// });
// d.checker();

var adb = require('adbkit');
var client = adb.createClient();

client.trackDevices().then(function (tracker) {
    tracker.on('add', function (device) {
        console.log('Device %s was plugged in', device.id);
    });
    tracker.on('remove', function (device) {
        console.log('Device %s was unplugged', device.id);
    });
    tracker.on('end', function () {
        console.log('Tracking stopped');
    });
}).catch(function (err) {
    console.error('Something went wrong:', err.stack);
});
//# sourceMappingURL=index.js.map
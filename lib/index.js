var adbkit = require('adbkit');
var Promise = require('bluebird');
var log = require('log');
var fs = require('fs');
var client = adbkit.createClient();
var process = require('process');
var arraydiff = require('./tools/arraydiff');
var devicesID = [];

function checker() {
    client.listDevices().then(function (devices) {
        arr = [];
        for (var i = 0; i < devices.length; i++) {
            arr.push(devices[i]['id']);
        }
        var res = arraydiff(devicesID, arr);
        if (Object.getOwnPropertyNames(res).length !== 0) {
            console.log(res);
        }
        devicesID = arr;
        setTimeout(checker, 100);
    }).catch(function (err) {
        console.log(err);
    });
}
checker();
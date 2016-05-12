var adbkit = require('adbkit');
var Promise = require('bluebird');
var log = require('log');
var fs = require('fs');
var client = adbkit.createClient();
var process = require('process');
var arraydiff = require('./tools/arraydiff');
var devicesList = [];

function checker() {
    client.listDevices().then(function(devices) {
        return Promise.map(devices, function(device) {
            return client.getFeatures(device.id).then(function(features) {
                console.log(features);
            })
        })
    }).catch(function(err) {
        console.log(err);
    })
}
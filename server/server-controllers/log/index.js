'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _Logger = require('./../../lib/Logger');

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');

var router = express.Router();


function checkFileExists(path) {
    return new _bluebird2.default(function (resolve, reject) {
        _fs2.default.stat(path, function (err, stats) {
            if (err) {
                reject(err);
            } else {
                resolve(stats);
            }
        });
    });
}
//TODO : ReadBuild with buffer and encoding
function readLog(time) {
    var timestamp = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

    return new _bluebird2.default(function (resolve, reject) {
        var options = {
            from: new Date() - 24 * 60 * 60 * 1000 * 100,
            until: new Date(),
            limit: 200
        };

        //
        // Find items logged between today and yesterday.
        //
        _Logger2.default.query(options, function (err, results) {
            if (err) {
                reject(err);
            }
            resolve(results);
        });
    });
}

var logFilePath = _path2.default.join(__dirname, '..', '..', '..', 'andcloud.log');

function routerConnectDB(db) {
    router.get('/get', function (req, res) {
        checkFileExists(logFilePath).then(function (stats) {
            var size = stats.size;
            return readLog(size);
        }).then(function (data) {
            res.send(JSON.stringify(data));
            return null;
        }).error(function (err) {
            res.send('read log file failed');
        });
    });
    return router;
}

module.exports = routerConnectDB;
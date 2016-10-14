var express = require('express');

var router = express.Router();
import fs from 'fs';
import Promise from 'bluebird';
import path from 'path';
import winston from 'winston';
import logger from './../../lib/Logger';

function checkFileExists(path) {
    return new Promise(function (resolve, reject) {
        fs.stat(path, (err, stats) => {
            if (err) {
                reject(err);
            } else {
                resolve(stats);
            }
        });
    })
}
//TODO : ReadBuild with buffer and encoding
function readLog(time, timestamp = '') {
    return new Promise((resolve, reject) => {
        var options = {
            from: new Date() - 24 * 60 * 60 * 1000 * 100,
            until: new Date(),
            limit: 200,
        };

        //
        // Find items logged between today and yesterday.
        //
        logger.query(options, function (err, results) {
            if (err) {
                reject(err);
            }
            resolve(results);
        });
    });
}

var logFilePath = path.join(__dirname, '..', '..', '..', 'andcloud.log');

function routerConnectDB(db) {
    router.get('/get', function (req, res) {
        checkFileExists(logFilePath)
            .then((stats) => {
                var size = stats.size;
                return readLog(size);
            })
            .then((data) => {
                res.send(JSON.stringify(data));
                return null;
            })
            .error((err) => {
                res.send('read log file failed');
            });
    });
    return router;
}

module.exports = routerConnectDB;

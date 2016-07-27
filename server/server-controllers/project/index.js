'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = require('./../../server-models/project/index');

var _index2 = _interopRequireDefault(_index);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _aapt = require('./../../lib/aapt');

var _aapt2 = _interopRequireDefault(_aapt);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

var storage = _multer2.default.diskStorage({
    destination: function destination(req, file, cb) {
        cb(null, _path2.default.join(__dirname, '..', '..', 'uploads'));
    },
    filename: function filename(req, file, cb) {
        cb(null, _uuid2.default.v4() + '.' + file.fieldname);
    }
});

var upload = (0, _multer2.default)({ storage: storage });

function routerConnectDB(db) {
    router.get('/projectDetail', function (req, res) {
        var id = req.query.id;
        new _index2.default(db).getProject(id, function (proj) {
            res.send(JSON.stringify(proj));
        });
    });
    router.get('/projectList', function (req, res) {
        var userid = req.session.user._id;
        new _index2.default(db).getProjectList(userid).then(function (projs) {
            var temp = projs.map(function ($) {
                $.apkList = $.apkList.map(function (_) {
                    return _extends({}, _, {
                        path: undefined
                    });
                });
                return $;
            });
            res.send(JSON.stringify(temp));
            return null;
        }).error(function (err) {
            res.send('failed');
        });
    });

    var cpUploads = upload.array('apk', 10);
    router.post('/createProject', cpUploads, function (req, res) {

        var apkList = req.files.map(function ($) {
            return {
                originalName: $.originalname,
                path: $.path,
                filename: $.filename
            };
        });

        var userid = req.session.user._id;
        new _index2.default(db).createProject(userid, req.body.name, apkList, {}).then(function (dbRes) {
            res.send(JSON.stringify(dbRes));
            _bluebird2.default.all(apkList.map(function ($) {
                return new _aapt2.default().analize($.path);
            })).then(function (results) {
                new _index2.default(db).updateDetail(dbRes, {});
                return null;
            }).error(function (err) {
                new _index2.default(db).updateDetail(dbRes, apk, { "analize": "failed" });
            });
            return null;
        }).error(function (err) {
            res.send(JSON.stringify("FAILED"));
        });
    });
    return router;
}

module.exports = routerConnectDB;
'use strict';

var _index = require('./../../server-models/project/index');

var _index2 = _interopRequireDefault(_index);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');

var router = express.Router();
//var multer = require('multer');

// var path = require('path');

// var uuid = require('uuid');


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
        new _index2.default(db).getProjectList(userid, function (projs) {
            //remove the path from proj.apklist.path
            var temp = projs.map(function ($) {
                $.apkList = $.apkList.map(function (_) {
                    _.path = "";
                    delete _.path;
                    return _;
                });
                return $;
            });
            res.send(JSON.stringify(temp));
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
        }).error(function (err) {
            res.send(JSON.stringify("FAILED"));
        });
    });
    return router;
}

module.exports = routerConnectDB;
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionnames = require('./../../lib/actionnames');

var _index = require('./../../server-models/project/index');

var _index2 = _interopRequireDefault(_index);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _Logger = require('./../../lib/Logger');

var _Logger2 = _interopRequireDefault(_Logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var router = express.Router();

var mqSock = require('./../../../mq');
// import aapt from './../../lib/aapt';


var storage = _multer2.default.diskStorage({
    destination: function destination(req, file, cb) {
        cb(null, _path2.default.join(__dirname, '..', '..', '..', 'uploads'));
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
                $.apk = _extends({}, $.apk, { path: undefined });
                return $;
            });
            res.send(JSON.stringify(temp));
            return null;
        }).error(function (err) {
            res.send('failed');
        });
    });

    var cpUploads = upload.single('apk');
    router.post('/createProject', cpUploads, function (req, res) {
        // console.log(req);
        // console.log(req.files);
        var apk = req.file;
        // var apkList = req.files.map($ => {
        //     return {
        //         originalName: $.originalname,
        //         path: $.path,
        //         filename: $.filename
        //     }
        // });


        var userid = req.session.user._id;
        new _index2.default(db).createProject(userid, req.body.name, apk, {}).then(function (dbRes) {
            //dbRes is the id of the project;
            res.send(JSON.stringify(dbRes));
            mqSock.send(JSON.stringify({
                type: _actionnames.CREATED_A_NEW_PROJECT,
                params: {
                    id: dbRes
                }
            }));
            // (new aapt()).analize(apk.path)
            // .then(result => {
            //     logger.log(result);
            //     var newApk = apk;
            //     newApk.detail = result;
            //     return (new Project(db)).updateApk(dbRes,newApk);
            // })
            // .error(err => {
            //     logger.err(err);
            //     var newApk = apk;
            //     newApk.detail = result;
            //     return (new Project(db)).updateApk(dbRes,newApk);
            // })
            // .error(err => {
            //     logger.err(err);
            // })

            return null;
        }).error(function (err) {
            res.send(JSON.stringify("FAILED"));
        });
    });
    return router;
}

module.exports = routerConnectDB;
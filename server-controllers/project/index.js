'use strict';

var _index = require('./../../server-models/project/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');

var router = express.Router();
var multer = require('multer');
var path = require('path');
var uuid = require('uuid');
var storage = multer.diskStorage({
    destination: function destination(req, file, cb) {
        cb(null, path.join(__dirname, '..', '..', 'uploads'));
    },
    filename: function filename(req, file, cb) {
        cb(null, uuid.v4() + '.' + file.fieldname);
    }
});
var upload = multer({ storage: storage });
function routerConnectDB(db) {
    router.get('/projectDetail', function (req, res) {
        var id = req.query.id;
        (0, _index2.default)(db).getProject(id, function (proj) {
            res.send(JSON.stringify(proj));
        });
    });
    router.get('/projectList', function (req, res) {
        var userid = req.session.user._id;
        (0, _index2.default)(db).getProjectList(userid, function (projs) {
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
        (0, _index2.default)(db).createProject(userid, req.body.name, apkList, {}, function (dbRes) {
            res.send(JSON.stringify(dbRes));
        });
    });
    return router;
}

module.exports = routerConnectDB;
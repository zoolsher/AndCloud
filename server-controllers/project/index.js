var express = require('express');
var project = require('./../../server-models/project/index');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var uuid = require('uuid');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', '..', 'uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, `${uuid.v4()}.${file.fieldname}`);
    }
})
var upload = multer({ storage: storage });
function routerConnectDB(db) {
    router.get('/projectDetail', function (req, res) {
        var id = req.query.id;
        project(db).getProject(id, function (proj) {
            res.send(JSON.stringify(proj));
        });
    });
    router.get('/projectList', function (req, res) {
        var testData = [];
        for (var i = 0; i < 100; i++) {
            testData.push({
                id: i,
                title: "Chrome " + i,
                version: 10 + i,
                icon: "/public/image/chrome.png",
                size: 10 + i + "MB",
                uploadTime: i + "天前"
            });
        }
        res.send(JSON.stringify(testData));
    });

    var cpUploads = upload.array('apk', 10);
    router.post('/createProject', cpUploads, function (req, res) {

        var apkList = req.files.map($ => {
            return {
                originalName: $.originalname,
                path: $.path,
                filename: $.filename
            }
        });

        var userid = req.session.user._id;
        project(db).createProject(userid, req.body.name, apkList, {}, function (dbRes) {
            res.send(JSON.stringify(dbRes));
        });
    });
    return router;
}

module.exports = routerConnectDB;
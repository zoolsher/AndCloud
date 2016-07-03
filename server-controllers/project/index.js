var express = require('express');
var project = require('./../../server-models/project/index');
var router = express.Router();

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
    })
    return router;
}

module.exports = routerConnectDB;
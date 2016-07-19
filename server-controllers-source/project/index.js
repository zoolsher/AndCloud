
var express = require('express');
var router = express.Router();

import Project from './../../server-models/project/index';
import multer from 'multer';
import path from 'path';
import uuid from 'uuid'

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', '..', 'uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, `${uuid.v4()}.${file.fieldname}`);
    }
});

var upload = multer({ storage: storage });

function routerConnectDB(db) {
    router.get('/projectDetail', function (req, res) {
        var id = req.query.id;
        (new Project(db)).getProject(id, function (proj) {
            res.send(JSON.stringify(proj));
        });
    });
    router.get('/projectList', function (req, res) {
        var userid = req.session.user._id;
        (new Project(db)).getProjectList(userid,function(projs){
            //remove the path from proj.apklist.path
            var temp = projs.map($=>{
                $.apkList = $.apkList.map(_=>{
                    _.path = "";
                    delete _.path;
                    return _
                })
                return $;
            })
            res.send(JSON.stringify(temp));
        });
        
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
        (new Project(db)).createProject(userid, req.body.name, apkList, {})
        .then((dbRes)=>{
            res.send(JSON.stringify(dbRes));
        })
        .error((err)=>{
            res.send(JSON.stringify("FAILED"));
        });
    });
    return router;
}

module.exports = routerConnectDB;
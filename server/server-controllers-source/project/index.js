
var express = require('express');
var router = express.Router();

import Project from './../../server-models/project/index';
import multer from 'multer';
import path from 'path';
import uuid from 'uuid';
import aapt from './../../lib/aapt';
import Promise from 'bluebird';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '..', '..', '..', 'uploads'));
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
        (new Project(db)).getProjectList(userid)
        .then(
            (projs)=>{
                var temp = projs.map($=>{
                    $.apkList = $.apkList.map(_=>{
                        return {
                            ..._,
                            path:undefined
                        }
                    })
                    return $;
                });
                res.send(JSON.stringify(temp));
                return null;
            }
        )
        .error((err)=>{
            res.send('failed');
        })
        
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
        .then((dbRes)=>{//dbRes is the id of the project;
            res.send(JSON.stringify(dbRes));
            Promise.all(apkList.map($=>{
                return (new aapt()).analize($.path);
            })).then(function(results){
                var newApkList = apkList.map((apk,index)=>{
                    apk.detail=results[index];
                    return apk;
                });
                return (new Project(db)).updateApkList(dbRes,newApkList);
            }).catch((err)=>{
                var newApkList = apkList.map((apk,index)=>{
                    apk.detail=err;
                    return apk;
                });
                return (new Project(db)).updateApkList(dbRes,newApkList);
            }).then(res=>{
                console.log(res);
                return null;
            });
            return null;
        })
        .error((err)=>{
            res.send(JSON.stringify("FAILED"));
        });
    });
    return router;
}

module.exports = routerConnectDB;
import {CREATED_A_NEW_PROJECT} from './../../lib/actionnames';
var express = require('express');
var router = express.Router();

var mqSock = require('./../../../mq');

import Project from './../../server-models/project/index';
import multer from 'multer';
import path from 'path';
import uuid from 'uuid';
import Promise from 'bluebird';
import logger from './../../lib/Logger';

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
        console.log(id);
        (new Project(db)).getProject(id)
        .then(result=>{
            res.send(JSON.stringify(result));
            return null;
        }).error(err=>{
            res.send(JSON.stringify(err));
        })
        // , function (proj) {
            // res.send(JSON.stringify(proj));
        // });
    });
    router.get('/projectList', function (req, res) {
        var userid = req.session.user._id;
        (new Project(db)).getProjectList(userid)
        .then(
            (projs)=>{
                var temp = projs.map($=>{
                    $.apk = {...$.apk,path:undefined};
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
        (new Project(db)).createProject(userid, req.body.name, apk, {})
        .then((dbRes)=>{//dbRes is the id of the project;
            res.send(JSON.stringify(dbRes));
            mqSock.send(JSON.stringify({
                type:CREATED_A_NEW_PROJECT,
                params:{
                    id:dbRes
                }
            }));


            return null;
        })
        .error((err)=>{
            res.send(JSON.stringify("FAILED"));
        });
    });
    return router;
}

module.exports = routerConnectDB;
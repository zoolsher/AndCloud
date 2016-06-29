var express = require('express');
var User = require('./../../server-models/user/index');
var router = express.Router();


function routerConnectDB(db) {

  router.get('/', function (req, res) {
    res.send(req.session);
  });

  router.get('/login', function (req, res) {
    console.log(req.query);
    User(db).login(req.query.name, req.query.pass, function (err, user) {
      if(err) throw err;
      if(user===false){
        req.session.isLogin = false;
        res.send({login:"failed"});
      }else{
        req.session.isLogin = true;
        req.session.user = user;
        res.send({login:"success"});
      }
    });
  });

  return router;
}

module.exports = routerConnectDB;

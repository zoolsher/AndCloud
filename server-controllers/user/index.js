var express = require('express');
var User = require('./../../server-models/user/index');
var router = express.Router();


function routerConnectDB(db) {

  router.get('/', function (req, res) {
    res.send(req.session);
  });

  router.get('/register', function (req, res) {
    var name = req.query.name;
    var pass = req.query.pass;
    User(db).register(name, pass, function (resss) {
      console.log('resss get called '+resss);
      res.send({h:resss+''});
      
    });
  });

  router.get('/login', function (req, res) {
    console.log(req.query);
    User(db).login(req.query.name, req.query.pass, function (err, user) {
      if (err) throw err;
      if (user === false) {
        req.session.isLogin = false;
        res.send({ login: "failed" });
      } else {
        req.session.isLogin = true;
        req.session.user = user;
        res.send({ login: "success" });
      }
    });
  });


  router.get('/logout', function (req, res) {
    console.log(req.query);
    delete req.session.user;
    req.session.isLogin = false;
    res.send({ logout: "success" });
  });
  return router;
}

module.exports = routerConnectDB;

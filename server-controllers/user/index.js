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
    User(db).register(name, pass, function (ret) {
      
      res.send(JSON.stringify(ret.state));
      
    });
  });

  router.get('/login', function (req, res) {
    User(db).login(req.query.name, req.query.pass, function (err, user) {
      if (err) {
        throw err;
      };
      if (user === null) {
        req.session.isLogin = false;
        res.send(JSON.stringify({ login: "failed" }));
      } else {
        req.session.isLogin = true;
        req.session.user = user;
        res.send(JSON.stringify({ login: "success" }));
      }
      return false;
    });
  });

  router.get('/existSameUser',function(req,res){
    User(db).checkUserExists(req.query.name,function(ret){
      res.send(ret);
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

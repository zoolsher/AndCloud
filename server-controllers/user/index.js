var express = require('express');

var router = express.Router();

router.get('/',function(req,res){
	res.send(req.session);
});

router.get('/login',function(req,res){
	req.session.isLogin = false;
	res.send('whatever');
});

module.exports = router;

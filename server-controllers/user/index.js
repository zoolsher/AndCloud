var express = require('express');

var router = express.Router();

router.get('/',function(req,res){
	res.send('final');
});

router.get('/login',function(req,res){
	res.send('whatever');
})
module.exports = router;

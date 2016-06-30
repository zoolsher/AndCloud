var md5 = require('crypto-js/md5');

function User(db) {
    function passwordHash(pass){
        return md5(pass);
    }
    function checkpass(pass,hash){
        return md5(pass) === hash; 
    }
    function login(name, pass, callback) {
        var res = db.collection('users').find({
            name: name
        });
        var userArr = [];
        res.each(function(err,doc){
            if(err) throw err;
            if(doc!=null){
                if(checkpass(pass,doc.pass)){
                    userArr.push(doc);
                }
            }else{
                if(userArr.length===0){
                    callback(null,false);
                }else{
                    callback(null,userArr[0]);
                }    
            }
        })
    }
    return {
        login:login
    }
}

module.exports = User;


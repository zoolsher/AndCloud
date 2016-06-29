function User(db) {
    function login(name, pass, callback) {
        var res = db.collection('users').find({
            name: name,
            pass: pass
        });
        var userArr = [];
        res.each(function(err,doc){
            if(err) throw err;
            if(doc!=null){
                userArr.push(doc);
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


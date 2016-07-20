'use strict';

var sha256 = require('crypto-js/sha256');

function User(db) {
    function passwordHash(pass) {
        return sha256(pass).toString();
    }
    function checkpass(pass, hash) {
        return sha256(pass).toString() === hash;
    }
    function login(name, pass, callback) {
        var res = db.collection('users').find({
            name: name
        });
        var retuser = null;
        res.each(function (err, doc) {
            if (err) throw err;
            if (doc != null) {
                if (checkpass(pass, doc.pass)) {
                    retuser = doc;
                }
            } else {
                callback(null, retuser);
            }
        });
    }
    function checkUserExists(name, callback) {
        var res = db.collection('users').find({ name: name });
        res.each(function (err, doc) {
            if (err) throw err;
            callback(doc !== null);
            return false;
        });
    }
    function register(name, pass, callback) {
        this.checkUserExists(name, function (res) {
            var ret = { state: {} };
            if (res === true) {
                ret.state.status = "failed";
                ret.state.failedReason = "user-exists";
                ret.state.fixSuggestion = "change-user-name";
                return callback(ret);
            } else {
                var cur = db.collection('users').insertOne({
                    name: name,
                    pass: passwordHash(pass),
                    project: []
                }, function (err, result) {
                    if (err) throw err;
                    ret.result = result;
                    ret.state.status = "success";
                    return callback(ret);
                });
            }
        });
    }
    return {
        login: login,
        checkUserExists: checkUserExists,
        register: register
    };
}

module.exports = User;
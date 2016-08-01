'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var collectionName = "projects";
var ObjectId = require('mongodb').ObjectID;

var projectConnectDB = function () {
    function projectConnectDB(db) {
        _classCallCheck(this, projectConnectDB);

        this.db = db;
    }

    _createClass(projectConnectDB, [{
        key: 'createProject',
        value: function createProject(userid, name, apkList, detail) {
            var _this = this;

            return new _bluebird2.default(function (resolve, reject) {
                _this.db.collection(collectionName).insertOne({
                    userid: userid,
                    name: name,
                    apkList: apkList.map(function (obj) {
                        var temp = Object.assign({}, obj);
                        temp.detail = {};
                        return temp;
                    }),
                    createTime: Date.now()
                }, function (err, res) {
                    if (err) {
                        reject(err);
                    } else {
                        if (res.result.ok) {
                            resolve(res.insertedId.toString());
                        } else {
                            reject(false);
                        }
                    }
                });
            });
        }
    }, {
        key: 'getProjectList',
        value: function getProjectList(userid) {
            var _this2 = this;

            return new _bluebird2.default(function (resolve, reject) {
                var cursor = _this2.db.collection(collectionName).find({
                    userid: userid
                }).sort({
                    createTime: -1
                });
                var docs = [];
                cursor.each(function (err, doc) {
                    if (err) {
                        reject(err);
                    }
                    if (doc != null) {
                        docs.push(doc);
                    } else {
                        resolve(docs);
                    }
                });
            });
        }
    }, {
        key: 'updateApkList',
        value: function updateApkList(id, apkList) {
            var _this3 = this;

            return new _bluebird2.default(function (resolve, reject) {
                var cursor = _this3.db.collection(collectionName).updateOne({ _id: new ObjectId(id) }, { $set: { apkList: apkList } }, function (err, object) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(object);
                    }
                });
            });
        }
    }]);

    return projectConnectDB;
}();

exports.default = projectConnectDB;
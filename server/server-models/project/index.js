"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var collectionName = "projects";

var projectConnectDB = function () {
    function projectConnectDB(db) {
        _classCallCheck(this, projectConnectDB);

        this.db = db;
    }

    _createClass(projectConnectDB, [{
        key: "createProject",
        value: function createProject(userid, name, apkList, detail) {
            var _this = this;

            return new _bluebird2.default(function (resolve, reject) {
                _this.db.collection(collectionName).insertOne({
                    userid: userid,
                    name: name,
                    apkList: apkList.map(function ($) {
                        // var temp = Object.assign({}, $);
                        // temp.detail = {};
                        // return temp;
                        return _extends({}, $, {
                            detail: {}
                        });
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
        key: "getProjectList",
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
    }]);

    return projectConnectDB;
}();

exports.default = projectConnectDB;
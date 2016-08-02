import Promise from 'bluebird';
const collectionName = "projects";
var ObjectId = require('mongodb').ObjectID;


class projectConnectDB {
    constructor(db) {
        this.db = db;
    }
    createProject(userid, name, apkList, detail) {
        return new Promise((resolve, reject) => {
            this.db.collection(collectionName).insertOne({
                userid: userid,
                name: name,
                apkList: apkList.map((obj) => {
                    var temp = Object.assign({}, obj);
                    temp.detail = {};
                    return temp;
                }),
                createTime: Date.now()
            },
                function (err, res) {
                    if (err) {
                        reject(err)
                    } else {
                        if (res.result.ok) {
                            resolve(res.insertedId.toString());
                        } else {
                            reject(false);
                        }
                    }
                })
        });
    }
    getProjectList(userid) {
        return new Promise((resolve, reject) => {
            var cursor = this.db.collection(collectionName).find({
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
            })
        });
    }
    updateApkList(id, apkList) {
        return new Promise((resolve, reject) => {
            var cursor = this.db.collection(collectionName).updateOne(
                { _id: new ObjectId(id) },
                { $set: { apkList: apkList } },
                function (err, object) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(object);
                    }
                }
            )
        });
    }
}



export default projectConnectDB;
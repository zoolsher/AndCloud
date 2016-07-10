function projectConnectDB(db) {
    var collectionName = "projects";
    function createProject(userid, name, apkList, detail, callback) {
        db.collection(collectionName).insertOne({
            userid: userid,
            name: name,
            apkList: apkList,
            detail: detail,
            createTime: Date.now()
        }, function (err, res) {
            if (err) throw err;
            if (res.result.ok) {
                const lastId = res.insertedId.toString();
                callback(lastId);
            } else {
                callback(false);
            }
        });
    }
    function deleteProject(id, callback) {

    }
    function updateProject(id, detail, callback) {

    }
    function getProject(id, callback) {
        callback({
            id: id,
            name: "Chrome Whatever",
            size: "100MB"
        });
    }
    function getProjectList(userid,callback){
        var cursor = db.collection(collectionName).find({
            userid:userid
        }).sort({
            createTime:-1
        });
        var docs = [];
        cursor.each(function(err,doc){
            if(err) throw err;
            if(doc!=null){
                docs.push(doc);
            }else{
                callback(docs);
            }
        })
    }
    return {
        createProject: createProject,
        deleteProject: deleteProject,
        updateProject: updateProject,
        getProject: getProject,
        getProjectList: getProjectList
    }
}

module.exports = projectConnectDB;
function projectConnectDB(db) {
    var collectionName = "projects";
    function createProject(name, filepath, detail, callback) {
        db.collection(collectionName).insertOne({
            name: name,
            filepath: filepath,
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
    return {
        createProject: createProject,
        deleteProject: deleteProject,
        updateProject: updateProject,
        getProject: getProject
    }
}

module.exports = projectConnectDB;
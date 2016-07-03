function projectConnectDB(db){
    function createProject(name,filepath,detail){

    }
    function deleteProject(name){

    }
    function updateProject(detail){

    }
    function getProject(id,callback){
        callback({
            id:id,
            name:"Chrome Whatever",
            size:"100MB"
        });
    }
    return {
        createProject:createProject,
        deleteProject:deleteProject,
        updateProject:updateProject,
        getProject:getProject
    }
}

module.exports = projectConnectDB;
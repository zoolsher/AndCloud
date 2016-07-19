import Promise from 'bluebird';
const collectionName = "projects";
class projectConnectDB{
    constructor(db){
        this.db = db;   
    }
    createProject(userid,name,apkList,detail){
        return new Promise((resolve,reject)=>{
            this.db.collection(collectionName).insertOne({
                userid: userid,
                name: name,
                apkList: apkList.map($=>{
                    var temp = Object.assign({},$);
                    temp.detail = {};
                    return temp;
                }),
                createTime: Date.now()
            },function(err,res){
                if(err) {
                    reject(err)
                }else{
                    if(res.result.ok){
                        resolve(res.insertedId.toString());
                    }else{
                        reject(false);
                    }
                }
            })
        });
    }
    getProjectList(userid,callback){
        var cursor = this.db.collection(collectionName).find({
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
}



export default projectConnectDB;
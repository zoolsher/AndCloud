import Aapt from './../index.js';

const filename = '/Users/zoolsher/Downloads/smartisan_reader_v1.2.0.apk';
var aapt = new Aapt();
aapt.analize(filename).then(
    (res)=>{
        console.log('hand print :' + JSON.stringify(res));
        console.log('works fine');
        return null;
    }
).error(
    (err)=>{
        console.log("err: "+err.toString());
    }
)
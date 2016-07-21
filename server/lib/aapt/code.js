import Promise from "bluebird";
import shell from 'shelljs';
import os from 'os';
import config from './config';
const parser = require('./badging_parser');

class Aapt {
    constructor(){
        this.osJudge();
    }
    osJudge(){
        const curos = os.platform();
        switch(curos){
            case "darwin":
                //use the mac one
                this.aaptPath = config['MACOS'];   
                break;
            case "win32":
                //use windows
                this.aaptPath = config['WIN32'];
                break;
            case "linux":
                //use linux
                this.apptPath = config['LINUX'];
                break;
        }        
    }
    analize(apkAddress){
        const order = `./${this.aaptPath} dump badging ${apkAddress}`;
        return new Promise((resolve,reject)=>{
            shell.exec(order,function(code,stdout,stderr){
                if(stderr){
                    reject(code,stderr);
                }else{
                    var res = parser.parse(stdout);
                    resolve(res);
                }
            })
        });
    }
}

export default Aapt;
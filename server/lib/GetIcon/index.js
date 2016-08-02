var AdmZip = require('adm-zip');

var GetIcon = function(apkPath){
	this.apkPath = apkPath;
	this.iconPath = null;
	this.from = function (iconPath){
		this.iconPath = iconPath;
		return this;
	}
	this.to = function(savePath){
		this.savePath = savePath;
		return this;
	}
	this.start = function(){
		var zip = new AdmZip(this.apkPath);
		try{
			zip.extractEntryTo(this.iconPath,this.savePath,false,true);
			return true;
		}catch(e){
			return false;
		}
	}
}

module.exports = GetIcon;
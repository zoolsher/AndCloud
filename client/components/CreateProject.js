import React from 'react';

const FILE_TYPE = ['.apk','.jpg'];

const CreateProject = React.createClass({
	handleSelect(evt){
		var files = evt.target.files;
		var allowFileList = [];
		Array.prototype.filter.call(files,(file)=>{
			var ext = file.name.substr(-4);
			if(FILE_TYPE.indexOf(ext)>=0){
				allowFileList.push(file);
			}
		})
		/**
		 * animation
		 */
		this.showModel(allowFileList);
	},
	showModel(fileList){
		
	},
	render(){
		return(
			<div className="am-input-group  am-form-file am-create-proj">
				<button type="button" className="am-btn am-btn-default am-btn-sm">
				<i className="am-icon-cloud-upload"></i> 选择要上传的文件</button>
				<input type="file" onChange={this.handleSelect} multiple/>
			</div>
		);
	}
});

export default CreateProject;

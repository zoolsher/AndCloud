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
		if(allowFileList.length>0){
			this.showModel(allowFileList);
		}else{
			var alert = this.refs.alert;
			$(alert).modal();
		}
	},
	showModel(fileList){

	},
	renderAlert(){
		return(
			<div className="am-modal am-modal-alert" tabIndex="-1" id="my-alert" ref="alert">
			  <div className="am-modal-dialog">
				<div className="am-modal-hd"> AndCloud 提醒您 </div>
				<div className="am-modal-bd">
				  你选择的文件中没有合法文件
				</div>
				<div className="am-modal-footer">
				  <span className="am-modal-btn">确定</span>
				</div>
			  </div>
			</div>
		);
	},
	render(){
		return(
			<div>
				<div className="am-input-group  am-form-file am-create-proj">
					<button type="button" className="am-btn am-btn-default am-btn-sm">
					<i className="am-icon-cloud-upload"></i> 选择要上传的文件</button>
					<input type="file" onChange={this.handleSelect} multiple/>
				</div>
				{this.renderAlert()}
			</div>
		);
	}
});

export default CreateProject;

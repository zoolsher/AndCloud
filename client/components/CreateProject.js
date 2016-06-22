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
		this.refs.fileNumber.innerHTML = fileList.length;
		this.refs.showName.innerHTML = fileList.reduce((str,file)=>str+=`<code>${file.name}</code>`,'');
		$("#my-prompt").modal({
			relatedTarget: this,
			onConfirm: function(e) {
				alert('你输入的是：' + e.data || '');
			},
			onCancel: function(e) {
				this.clearFile();
			}
		});
	},
	clearFile(){
		var file = this.refs.file;
		if (file.outerHTML) {
			file.outerHTML = file.outerHTML;
		} else { // FF(包括3.5)
			file.value = "";
		}
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
	renderModel(){
		return(
			<div className="am-modal am-modal-prompt" tabIndex="-1" id="my-prompt">
			  <div className="am-modal-dialog">
			    <div className="am-modal-hd">输入工程名</div>
				<div className="am-modal-hd">你选择了以下<code ref="fileNumber">x</code>个文件</div>
				<span ref="showName">
				</span>
			    <div className="am-modal-bd">
			      <input type="text" className="am-modal-prompt-input" />
			    </div>
			    <div className="am-modal-footer">
			      <span className="am-modal-btn" data-am-modal-cancel>取消</span>
			      <span className="am-modal-btn" data-am-modal-confirm>提交</span>
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
					<input ref="file" type="file" onChange={this.handleSelect} multiple/>
				</div>
				{this.renderAlert()}
				{this.renderModel()}
			</div>
		);
	}
});

export default CreateProject;

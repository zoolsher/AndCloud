import React from 'react';

const FILE_TYPE = ['.apk', '.jpg'];

const CreateProject = React.createClass({
	handleSelect(evt) {
		var files = evt.target.files;
		var allowFileList = [];
		Array.prototype.filter.call(files, (file) => {
			var ext = file.name.substr(-4);
			if (FILE_TYPE.indexOf(ext) >= 0) {
				allowFileList.push(file);
			}
		})
		/**
		 * animation
		 */
		if (allowFileList.length > 0) {
			this.showModel(allowFileList);
		} else {
			var alert = this.refs.alert;
			$(alert).modal();
		}
	},
	showModel(fileList) {
		var comp = this;
		this.refs.fileNumber.innerHTML = fileList.length;
		this.refs.showName.innerHTML = fileList.reduce((str, file) => str += `<code>${file.name}</code>`, '');
		$("#my-prompt").modal({
			relatedTarget: this,
			onConfirm: function (e) {
				comp.submitAll(fileList, e.data);
			},
			onCancel: function (e) {
				comp.clearFile();
			}
		});
	},
	clearFile() {
		var file = this.refs.file;
		if (file.outerHTML) {
			file.outerHTML = file.outerHTML;
		} else { // FF(包括3.5)
			file.value = "";
		}
	},
	submitAll(fileList, name) {
		var formData = new FormData();
		fileList.map($=>{
			formData.append('apk',$);
		});
		formData.append('name', name);
		var httpRequest;
		if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
			httpRequest = new XMLHttpRequest();
		} else if (window.ActiveXObject) { // IE 6 and older
			httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}
		var upload = httpRequest.upload;
		upload.addEventListener('progress', this.uploadProgress, false);
		upload.addEventListener('load', this.uploadSuccess, false);
		upload.addEventListener('error', this.uploadError, false);
		httpRequest.open("POST", "/s/project/createProject");
		httpRequest.send(formData);
	},
	uploadError(evt) {

	},
	uploadSuccess(evt) {
		console.log(this);
		var comp = this;
		$.ajax({
			url: "/s/project/projectList",
			method: "GET",
		}).success(function (data) {
			comp.props.projectListLoadingSuccess(JSON.parse(data));
		});
	},
	uploadProgress(evt) {

	},
	renderAlert() {
		return (
			<div className= "am-modal am-modal-alert" tabIndex= "-1" id= "my-alert" ref= "alert" >
				<div className="am-modal-dialog">
					<div className="am-modal-hd"> AndCloud 提醒您 </div>
					<div className="am-modal-bd">
						你选择的文件中没有合法文件
					</div>
					<div className="am-modal-footer">
						<span className="am-modal-btn">确定</span>
					</div>
				</div>
			</div >
		);
	},
	renderModel() {
		return (
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
	render() {
		return (
			<div>

				<div className="am-input-group  am-form-file am-create-proj">
					<button type="button" className="am-btn am-btn-default am-btn-sm">
						<i className="am-icon-cloud-upload"></i> 选择要上传的文件</button>
					<input ref="file" type="file" onChange={this.handleSelect} multiple/>
				</div>
				{this.renderAlert() }
				{this.renderModel() }
			</div>
		);
	}
});

export default CreateProject;

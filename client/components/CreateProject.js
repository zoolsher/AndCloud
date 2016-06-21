import React from 'react';

const CreateProject = React.createClass({
	render(){
		return(
			<div className="am-input-group  am-form-file am-create-proj">
				<button type="button" className="am-btn am-btn-default am-btn-sm">
				<i className="am-icon-cloud-upload"></i> 选择要上传的文件</button>
				<input type="file" multiple/>
			</div>
		);
	}
});

export default CreateProject;

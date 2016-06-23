import React from 'react';

var AppInfo = React.createClass({
	render(){
		var app = this.props.app;
		return(
			<div className="am-g am-container">

			  <img src={app['icon']} alt="" className="am-img-thumbnail am-u-md-2 am-u-sm-2 zo-box-shadow" />

			  <div className="am-u-md-10 am-u-sm-10">
				<div>
				  应用名称：<code>{app['title']}</code>
				</div>
				<div>
				  版本号：<code>{app['version']}</code>
				</div>
				<div>
				  大小：<code>{app['size']}</code>
				</div>
				<div>
				  上传时间:<code>{app['uploadTime']}</code>
				</div>
			  </div>
			</div>
		);
	}
});

export default AppInfo;

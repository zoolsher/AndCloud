import React from 'react';

var AppInfo = React.createClass({
	render(){
		return(
			<div className="am-g am-container">
			  <img src={this.props.app['icon']} alt="" className="am-img-thumbnail am-u-md-2 am-u-sm-2" />
			  <div className="am-u-md-10 am-u-sm-10">
				<div>
				  应用名称：<code>{this.props.app['title']}</code>
				</div>
				<div>
				  版本号：<code>{this.props.app['version']}</code>
				</div>
				<div>
				  大小：<code>{this.props.app['size']}</code>
				</div>
				<div>
				  上传时间:<code>{this.props.app['uploadTime']}</code>
				</div>
			  </div>
			</div>
		);
	}
});

export default AppInfo;

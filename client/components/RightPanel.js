import React from 'react';

const RightPanel  = React.createClass({

	render(){
		var id = this.props.params.appid;
		return(
			<div>{id}</div>
		);
	}
})

export default RightPanel;

//
// <div className="am-g am-container">
//   <img src={this.props.detail.icon} alt="" className="am-img-thumbnail am-u-md-2 am-u-sm-2" />
//   <div className="am-u-md-10 am-u-sm-10">
// 	<div>
// 	  应用名称：<code>{this.props.detail.title}</code>
// 	</div>
// 	<div>
// 	  版本号：<code>{this.props.detail.version}</code>
// 	</div>
// 	<div>
// 	  大小：<code>{this.props.detail.size}</code>
// 	</div>
//   </div>
// </div>

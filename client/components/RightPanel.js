import React from 'react';
import AppInfo from './AppInfo';
import Action from './Action';
import NoAppSelect from './NoAppSelect';
const RightPanel = React.createClass({

	render() {
		var app = this.props.projectList[this.props.params.appid];
		if (app) {
			return (
				<div>
					<AppInfo app={app}>
					</AppInfo>
					<hr/>
					<Action>
					</Action>
				</div>
			);
		}else{
			return(
				<NoAppSelect msg={"这个 app 不存在"}/>
			);
		}

	}
});

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

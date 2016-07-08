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

import React from 'react';
import AppInfo from './AppInfo';
import Action from './Action';
import NoAppSelect from './NoAppSelect';
const RightPanel = React.createClass({
	propTypes:{
		projectList:React.PropTypes.array
	},
	render() {
		var project = this.props.projectList[this.props.params.appid];
		if (project) {
			return (
				<div>
					{project.apkList.map($ => <AppInfo app={$}/>) }
					<hr/>
					<Action>
					</Action>
				</div>
			);
		} else {
			return (
				<NoAppSelect msg={"这个 app 不存在"}/>
			);
		}

	}
});

export default RightPanel;

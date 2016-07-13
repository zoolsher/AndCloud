import React from 'react';
import AppInfo from './AppInfo';
import Action from './Action';
import NoAppSelect from './NoAppSelect';
const RightPanel = React.createClass({
	propTypes: {
		projectList: React.PropTypes.array
	},
	render() {
		var project = this.props.projectList.find($ => { return this.props.params.appid == $.displayId });
		if (project) {
			return (
				<div>
					{project.name}
					<hr/>
					{project.apkList.map($ => {
						return (
							<div>
								<AppInfo app={$}/>
							</div>
						)
					}) }
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

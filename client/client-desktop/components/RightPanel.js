import React from 'react';
import AppInfo from './AppInfo';
import Action from './Action';
import NoAppSelect from './NoAppSelect';
import {Link} from 'react-router';
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
					<a href="/report/0" className="am-btn am-btn-default" >查看报告</a>
					<hr/>
					{project.apkList.map(($,_) => {
						return (
							<div key={_}>
								<AppInfo  app={$}/>
								<hr/>
							</div>
						)
					}) }
					
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

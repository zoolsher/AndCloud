import React from 'react';
import AppInfo from './AppInfo';
import Action from './Action';
import NoAppSelect from './NoAppSelect';
import {Link} from 'react-router';
const RightPanel = React.createClass({
	propTypes: {
		projectList: React.PropTypes.array
	},
	loadDetail(_id){
		$.ajax({
			url:"/s/project/projectDetail?id="+_id,
			method:"get",
			success:function(data){
				try{
					var jsonObject = JSON.parse(data);
					this.props.loadProjectDetailSuccess(_id,jsonObject);
				}catch(e){
					this.props.loadProjectDetailFailed(_id,e);
				}
			}
		})
		this.props.startLoadProjectDetail(_id);
	},
	render() {
		var project = this.props.projectList.find($ => { return this.props.params.appid == $.displayId });
		if (project) {
			console.log(project);
			var id = project._id;
			this.loadDetail(id);
			return (
				<div>
					{project.name}
					<a href="/report/0" className="am-btn am-btn-default" >查看报告</a>
					<button className="am-btn am-btn-default">
						<i className="am-icon-spinner am-icon-spin"></i>加载中
					</button>
					<hr/>
					<div>
						<AppInfo app={project.apk}/>
						<hr />
					</div>
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

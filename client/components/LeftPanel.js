import React from 'react';
import {Link} from 'react-router';
import CreateProject from './CreateProject';
import History from './History';

const LeftPanel  = React.createClass({
	renderPopUp(){
		return(
			<div className="am-popup" id="my-popup">
			  <div className="am-popup-inner">
				<div className="am-popup-hd">
				  <h4 className="am-popup-title">上传说明</h4>
				  <span data-am-modal-close
						className="am-close">&times;</span>
				</div>
				<div className="am-popup-bd">
				  好了同志们，谁来给我写个能用的上传说明。
				</div>
			  </div>
			</div>
		);
	},
	render(){
		return(
			<div>
				{this.renderPopUp()}
				新建 <span className="am-badge am-round am-fr" data-am-modal="{target: '#my-popup'}">i</span>
				<hr/>
					<CreateProject></CreateProject>
				<br/>
				历史
				<hr/>
                	<History {...this.props}></History>
            </div>
		);
	}
})

module.exports = LeftPanel;

import React from 'react';
import {Link} from 'react-router';
import CreateProject from './CreateProject';
import History from './History';

const LeftPanel  = React.createClass({
	render(){

		return(
			<div>
				新建
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

import React from 'react';
import Header from './Header';
const Report = React.createClass({
	render() {
		var btnname = '';
		switch (this.props.login.state) {
			case 'NOT_LOGIN':
				btnname = "确认";
				break;
			case 'LOGGING_IN':
				btnname = '正在登陆';
				break;
			case 'LOGIN_SUCCESS':
				btnname = "登录成功";
				break;
			default: break;

		}
		return (
			<div>
				<Header/>
				report
			</div>
		);
	}
});

export default Report;

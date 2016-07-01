import React from 'react';

var Login = React.createClass({
	submitInfo(e) {
		//check
		var comp = this;
		var pw = this.refs.password.value.trim();
		var un = this.refs.username.value.trim();
		if (pw.length < 4) return; //check password
		//start sending ajax
		this.props.startLogging(un, pw);
		$.ajax({
			url: `/s/user/login?name=${un}&pass=${pw}`,
			method: "GET"
		}).success(function (data) {
			if (JSON.parse(data).login === "success") {
				comp.props.loginSuccess();
				window.location.pathname = '/';
			} else {
				// this.props.login
			}
		}).error(function () {

		}).done(function () {

		});

	},

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
			<div className="am-g">
				<div className="am-u-md-4 am-u-md-offset-4">
					<div className="auth-form">
						<form action="/session">
							<div className="auth-form-header">
								<h1>Sign in to AndCloud</h1>
							</div>
							<div className="auth-form-body">

								<div className="am-input-group ">
									<span className="am-input-group-label"><i className="am-icon-user am-icon-fw"></i></span>
									<input type="text" className="am-form-field form-input" placeholder="Username" ref='username'/>
								</div>

								<div className="am-input-group ">
									<span className="am-input-group-label"><i className="am-icon-lock am-icon-fw"></i></span>
									<input type="password" className="am-form-field form-input" placeholder="Password" ref='password'/>
								</div>

								<button type="button" className="am-btn am-btn-primary am-radius form-btn" onClick={this.submitInfo}>
									{btnname}
								</button>
							</div>
						</form>
					</div>

				</div>
			</div>
		);
	}
});

export default Login;

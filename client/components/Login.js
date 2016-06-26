import React from 'react';

var Login = React.createClass({
	checkPassword(){
		console.log('qwe');
		var pw=this.refs.password.value.trim();
		if(pw.length<4) return;
	},
	submitInfo(e){
		this.checkPassword();
		this.props.startLogging();
	},

	render(){
			var btnname = '';
			switch (this.props.login.state) {
				case 'NOT_LOGIN':
					btnname="确认";
					break;
				case 'LOGGING_IN':
					btnname = '正在登陆';
					break;
				default:break;

			}
		  return (
        <div className="am-g">
					<div className="am-u-md-4 am-u-md-offset-4">
						<div className="am-input-group">
						<span className="am-input-group-label"><i className="am-icon-user am-icon-fw"></i></span>
						<input type="text" className="am-form-field" placeholder="Username" ref='username'/>
						</div>

						<div className="am-input-group">
						<span className="am-input-group-label"><i className="am-icon-lock am-icon-fw"></i></span>
						<input type="password" className="am-form-field" placeholder="Password" ref='password'/>
						</div>

						<button type="button" className="am-btn am-btn-primary am-radius" onClick={this.submitInfo}>
							{btnname}
						</button>
					</div>

				</div>
      );
	}
});

export default Login;

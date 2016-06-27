import React from 'react';

var Login = React.createClass({
	submitInfo(e){
		var pw=this.refs.password.value.trim();
		if(pw.length<4) return; //check password
		console.log(123);
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

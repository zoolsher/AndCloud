import React from 'react';
import {Link} from 'react-router';

const Header = React.createClass({
	render(){
		return(
			<header className="am-topbar am-topbar-inverse am-topbar-fixed-top">
				<h1 className="am-topbar-brand">
					<Link to={'/'}>AndCloud</Link>
				</h1>
				<button className="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#doc-topbar-collapse'}">
					<span className="am-sr-only">导航切换</span>
					<span className="am-icon-bars"></span>
				</button>
				<div className="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
					<div className="am-topbar-right">
						<div className="am-dropdown" data-am-dropdown="{boundary: '.am-topbar'}">
							<button className="am-btn am-btn-secondary am-topbar-btn am-btn-sm am-dropdown-toggle" data-am-dropdown-toggle>登录 <span className="am-icon-caret-down"></span></button>
							<ul className="am-dropdown-content">
								<li><a href="#">注册</a></li>
								<li><a href="#">随便看看</a></li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		);
	}
});

export default Header;

import React from 'react';
import {Link} from 'react-router';

const Header = React.createClass({
	render() {
		return (
			<header className="am-topbar am-topbar-inverse am-topbar-fixed-top">
				<h1 className="am-topbar-brand">
					<Link to={'/'}><i className="am-icon-android"></i> AndCloud</Link>
				</h1>
				<button className="am-topbar-btn am-topbar-toggle am-btn am-btn-sm am-btn-success am-show-sm-only" data-am-collapse="{target: '#doc-topbar-collapse'}">
					<span className="am-sr-only">导航切换</span>
					<span className="am-icon-bars"></span>
				</button>
				<div className="am-collapse am-topbar-collapse" id="doc-topbar-collapse">
					<div className="am-topbar-right">
						<ul className="am-nav am-nav-pills am-topbar-nav">
							<li className=""><a href="#"><i className="am-icon-user"></i> {"username"}</a></li>
						</ul>
					</div>
				</div>
			</header>
		);
	}
});
//this.props.userInfo.name
export default Header;

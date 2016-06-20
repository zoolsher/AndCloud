import React from 'react';
import Header from './Header';
const NoMatch = React.createClass({
	render(){
		return(
			<div>
				<Header></Header>
				<div className="am-g">
					<img className="am-img-responsive am-img-thumbnail am-u-md-6" src="/public/image/notfound.jpg" alt=""/>
				</div>
			</div>
		);
	}
})

export default NoMatch;

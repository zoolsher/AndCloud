import React from 'react';

const NoAppSelect = React.createClass({
	render(){
		return (
			<div>
			{this.props.msg?this.props.msg:"请在左侧选择 APP；"}
			</div>
		);
	}
})

export default NoAppSelect;

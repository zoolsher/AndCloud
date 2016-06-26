import React from 'react';

const BlurCover = React.createClass({
	handleFinish(){
		this.props.startLoadingFinish();
	},
	render(){
		var loadingFull = {width:"100%"};
		var processBarStyle={height:"2.2rem",top:"50%",position:"fixed",width:"60%",left:"20%"};
		if(this.props.startLoading){
			return(
				<div className="zo-cover">
					<div className="am-progress am-progress-striped am-progress-sm am-active " style={processBarStyle}>
						<div className="am-progress-bar am-progress-bar-secondary"  style={loadingFull} onClick={this.handleFinish}>正在加载</div>
					</div>
				</div>
			);
		}else{
			return(<div></div>);
		}
	}
})

export default BlurCover;

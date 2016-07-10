import React from 'react';
import {Link} from 'react-router';

const History = React.createClass({
	compTimeDiff(dateTimeStamp) {
		var minute = 1000 * 60;
		var hour = minute * 60;
		var day = hour * 24;
		var halfamonth = day * 15;
		var month = day * 30;
		var now = new Date().getTime();
		var diffValue = now - dateTimeStamp;
		if (diffValue < 0) { return; }
		var monthC = diffValue / month;
		var weekC = diffValue / (7 * day);
		var dayC = diffValue / day;
		var hourC = diffValue / hour;
		var minC = diffValue / minute;
		var result = "";
		if (monthC >= 1) {
			result = "" + parseInt(monthC) + "月前";
		}
		else if (weekC >= 1) {
			result = "" + parseInt(weekC) + "周前";
		}
		else if (dayC >= 1) {
			result = "" + parseInt(dayC) + "天前";
		}
		else if (hourC >= 1) {
			result = "" + parseInt(hourC) + "小时前";
		}
		else if (minC >= 1) {
			result = "" + parseInt(minC) + "分钟前";
		} else{
			result = "刚刚";
		}
		return result;
	},
	handleSearch(e) {
		this.props.searchChange(e.target.value);
	},
	render() {
		const pageSize = 10;
		var totalPage = Math.ceil(this.props.projectList.length / pageSize) - 1;
		var curPage = this.props.params.page;
		return (
			<div>
				<div className="am-input-group">
					<input type="text" className="am-form-field" onChange={this.handleSearch} />
					<span className="am-input-group-btn">
						<button className="am-btn am-btn-default" type="button"><span className="am-icon-search"></span></button>
					</span>
				</div>
				<ul className="am-list am-list-border am-list-striped">
					{
						this.props.projectList.filter((proj, index) => {
							return proj.name.toLowerCase().indexOf(this.props.searchText.toLowerCase() || '') >= 0;
						}).filter((proj, index) => {
							if (index >= (curPage - 1) * pageSize && index < curPage * pageSize) {
								return true;
							} else {
								return false;
							}
						}).map((proj, index) => {
							return (
								<li key={proj._id}>
									<Link to={`/page/${curPage}/app/${index}`}>
										{proj.name}
										<span className="am-badge am-badge-success">{this.compTimeDiff(proj.createTime)}</span>
									</Link>
								</li>
							);
						})
					}
				</ul>
				<ul className="am-pagination">
					<li className="am-pagination-prev">
						<Link to={`/page/${this.props.params.page > 1 ? this.props.params.page - 1 : 1}${this.props.params.appid ? '/app/' + this.props.params.appid : ''}`}>&laquo; 上一页</Link>
					</li>
					<li className="am-pagination-next">
						<Link to={`/page/${this.props.params.page <= totalPage ? Number(this.props.params.page) + 1 : this.props.params.page}${this.props.params.appid ? '/app/' + this.props.params.appid : ''}`}>下一页 &raquo; </Link>
					</li>
				</ul>
			</div>
		);
	}
});

export default History;

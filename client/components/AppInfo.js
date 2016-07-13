import React from 'react';

var AppInfo = React.createClass({
	getDateDiff(dateTimeStamp) {
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
		}
		else {
			result = "刚刚";
		}
		return result;
	},
	render() {
		var app = this.props.app;
		return (
			<div className="am-g am-container">

				<img src={app['icon']} alt="" className="am-img-thumbnail am-u-md-2 am-u-sm-2 zo-box-shadow" />

				<div className="am-u-md-10 am-u-sm-10">
					<div>
						应用名称：<code>{app['originalName'] || "未分析完成呢"}</code>
					</div>
					<div>
						版本号：<code>{app['version'] || "未分析完成呢"}</code>
					</div>
					<div>
						大小：<code>{app['size'] || "未分析完成呢"}</code>
					</div>
					<div>
						上传时间: <code>{ this.getDateDiff(app['createTime']) }</code>
					</div>
					<pre>
						{JSON.stringify(app)}
					</pre>
				</div>
			</div>
		);
	}
});

export default AppInfo;

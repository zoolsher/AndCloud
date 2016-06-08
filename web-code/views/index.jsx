import React from 'react';
import DefaultLayout from './layouts/main.jsx';
import Header from './Modules/header.jsx';

var index = React.createClass({
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <Header></Header>
        <div className="am-g">
          <div className="am-u-md-3">
            <br/>
            <div className="am-input-group">
              <input type="text" className="am-form-field" />
              <span className="am-input-group-btn">
                <button className="am-btn am-btn-default" type="button"><span className="am-icon-search"></span> </button>
              </span>
            </div>
            <ul className="am-list am-list-border">
              <li>
                <a href="#">百度手机浏览器</a>
              </li>
              <li>
                <a href="#">锤子便签</a>
              </li>
              <li>
                <a href="#">锤子日历</a>
              </li>
              <li>
                <a href="#">锤子邮箱</a>
              </li>
              <li>
                <a href="#">手机淘宝</a>
              </li>
            </ul>
          </div>
          <div className="am-u-md-9">
            <div className="am-g am-container">
              <br/>
              <img src="/public/image/chrome.png" alt="" className="am-img-thumbnail am-u-md-2 am-u-sm-2" />
              <div className="am-u-md-10 am-u-sm-10">
                <div>
                  应用名称：<code>Chrome</code>
                </div>
                <div>
                  版本号：<code>10.0</code>
                </div>
                <div className="">
                  大小：<code>100MB(这么大怎么不去吃屎</code>
                </div>
              </div>
            </div>
            <br/>
            <div className="am-u-sm-12">
              <ul className="am-list am-list-static">
                <li>
                  <i className="am-icon-upload am-icon-fw"></i>&nbsp;
                  上传成功
                  <span className="am-badge am-badge-success">
                  <i className="am-icon-check"></i>
                  </span>
                  
                  </li>
                <li>
                  <i className="am-icon-laptop am-icon-fw"></i>&nbsp;
                  自动化检测流程
                  <span className="am-badge">
                  <i className="am-icon-spinner am-icon-pulse"></i>
                  </span>
                  </li>
                <li><i className="am-icon-keyboard-o am-icon-fw"></i>&nbsp;
                手动化流程检测
                <span className="am-badge">
                  <i className="am-icon-spinner am-icon-pulse"></i>
                  </span>
                </li>
                <li><i className="am-icon-file-o am-icon-fw"></i>&nbsp;
                报告生成
                <span className="am-badge">
                  <i className="am-icon-spinner am-icon-pulse"></i>
                  </span>
                </li>
              </ul>

              
            </div>

          </div>
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = index;
import React from 'react';
import DefaultLayout from './layouts/main.jsx';
import Header from './Modules/header.jsx';
import ProjectList from './Modules/projectList.jsx';
import AppDetail from './Modules/detail.jsx';
var index = React.createClass({
  render: function () {
    return (
      <DefaultLayout title={this.props.title}>
        <Header></Header>
        <div className="am-g">
          <div className="am-u-md-3">
            <br/>
            <ProjectList list={this.props.list} curPage={this.props.curPage} totalPage={this.props.totalPage}>
            </ProjectList>
          </div>
          <div className="am-u-md-9">
            <br/>
            <AppDetail detail={this.props.curDetail}>
            </AppDetail>
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
                  手动化检测流程
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
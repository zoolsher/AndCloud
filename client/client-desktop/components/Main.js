import React from 'react';
import { Link, Router, Route, IndexRoute, browserHistory } from 'react-router';
import LeftPanel from './LeftPanel';
import Header from './Header';
import RightPanel from './RightPanel';
import BlurCover from './BlurCover';

const Main = React.createClass({
  componentDidUpdate() {
    // this.state.startLoading = false;
  },
  getInitialState() {
    var comp = this;
    this.props.loadUserInfo();
    $.ajax({
      url: "/s/user",
      method: "GET"
    }).success(function (data) {
      const user = JSON.parse(data);
      comp.props.loadUserInfoSuccess(user);
      if (!user.state) {
        window.location.pathname = "/user/login";
      }
      comp.props.projectListLoading();
      $.ajax({
        url: "/s/project/projectList",
        method: "GET",
      }).success(function (data) {
        window.setTimeout(function () {
          comp.setState({
            startLoading: false
          })
        }, 1000);

        comp.props.projectListLoadingSuccess(JSON.parse(data));
      });
    });

    return {
      startLoading: true
    };
  },
  render() {
    var className = this.state.startLoading ? "zo-blur" : "";
    return (
      <div>
        <BlurCover {...this.props} startLoading={this.state.startLoading}></BlurCover>

        <div className={className}>
          <Header {...this.props}></Header>

          <div className="am-g">
            <div className="am-u-md-3">
              <br/>
              <LeftPanel {...this.props}></LeftPanel>
            </div>
            <div className="am-u-md-9">
              <br />
              { React.cloneElement(this.props.children, this.props) }
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Main;

// import React from 'react';
// import { Link } from 'react-router';

// const Main = React.createClass({

//   render() {
//     // Then we go ahead and return some JSX
//     return (
//       <div>
//         <h1>
//           <Link to="/">Reduxstagram</Link>
//         </h1>
//         {/* We use cloneElement here so we can auto pass down props */}
//         { React.cloneElement(this.props.children, this.props) }
//       </div>
//     );
//   }

// });

// export default Main;

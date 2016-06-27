import React from 'react';
import { Link,Router,Route,IndexRoute,browserHistory } from 'react-router';
import LeftPanel from './LeftPanel';
import Header from './Header';
import RightPanel from './RightPanel';
import BlurCover from './BlurCover';

const Main = React.createClass({
  render(){
    var className = this.props.startLoading?"zo-blur":"";
    return (
        <div>
        <BlurCover {...this.props}></BlurCover>

        <div className={className}>
            <Header></Header>

            <div className="am-g">
              <div className="am-u-md-3">
                <br/>
                <LeftPanel {...this.props}></LeftPanel>
              </div>
              <div className="am-u-md-9">
                <br />
                { React.cloneElement(this.props.children,this.props) }
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

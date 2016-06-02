import React from 'react';
import DefaultLayout from './layouts/main.jsx';


var index = React.createClass({
  render: function() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>
          <img src="/public/image/mi3.png" alt="手机外观图"/>
        </div>
      </DefaultLayout>
    );
  }
});

module.exports = index;
var React = require('react');

var DefaultLayout = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="/public/public.css"/>
          <title>{this.props.title}</title>
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
});

module.exports = DefaultLayout;
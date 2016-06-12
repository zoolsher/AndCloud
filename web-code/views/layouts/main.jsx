var React = require('react');

var DefaultLayout = React.createClass({
  render: function () {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta name="viewport"
            content="width=device-width, initial-scale=1" />
          <meta name="renderer" content="webkit" />
          <meta httpEquiv="Cache-Control" content="no-siteapp"/>
          <link rel="icon" type="image/png" href="assets/i/favicon.png" />
          <meta name="mobile-web-app-capable" content="yes" />
          <link rel="icon" sizes="192x192" href="assets/i/app-icon72x72@2x.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="apple-mobile-web-app-title" content="Amaze UI"/>
          <link rel="apple-touch-icon-precomposed" href="assets/i/app-icon72x72@2x.png" />
          <meta name="msapplication-TileImage" content="assets/i/app-icon72x72@2x.png" />
          <meta name="msapplication-TileColor" content="#0e90d2" />
          <link rel="stylesheet" href="/public/css/amazeui.min.css" />
          <link rel="stylesheet" href="/public/css/app.css" />
          <link rel="stylesheet" href="/public/public.css"/>
          <title>{this.props.title}</title>
        </head>
        <body className="am-with-topbar-fixed-top">{this.props.children}</body>
        <script src="public/js/jquery.min.js"></script>
        <script src="public/js/amazeui.min.js"></script>
      </html>
    );
  }
});

module.exports = DefaultLayout;
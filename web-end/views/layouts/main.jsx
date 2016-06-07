"use strict";

var React = require('react');

var DefaultLayout = React.createClass({
  displayName: "DefaultLayout",

  render: function render() {
    return React.createElement(
      "html",
      null,
      React.createElement(
        "head",
        null,
        React.createElement("meta", { charSet: "utf-8" }),
        React.createElement("meta", { httpEquiv: "X-UA-Compatible", content: "IE=edge" }),
        React.createElement("meta", { name: "description", content: "" }),
        React.createElement("meta", { name: "keywords", content: "" }),
        React.createElement("meta", { name: "viewport",
          content: "width=device-width, initial-scale=1" }),
        React.createElement(
          "title",
          null,
          "Hello Amaze UI"
        ),
        React.createElement("meta", { name: "renderer", content: "webkit" }),
        React.createElement("meta", { "http-equiv": "Cache-Control", content: "no-siteapp" }),
        React.createElement("link", { rel: "icon", type: "image/png", href: "assets/i/favicon.png" }),
        React.createElement("meta", { name: "mobile-web-app-capable", content: "yes" }),
        React.createElement("link", { rel: "icon", sizes: "192x192", href: "assets/i/app-icon72x72@2x.png" }),
        React.createElement("meta", { name: "apple-mobile-web-app-capable", content: "yes" }),
        React.createElement("meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }),
        React.createElement("meta", { name: "apple-mobile-web-app-title", content: "Amaze UI" }),
        React.createElement("link", { rel: "apple-touch-icon-precomposed", href: "assets/i/app-icon72x72@2x.png" }),
        React.createElement("meta", { name: "msapplication-TileImage", content: "assets/i/app-icon72x72@2x.png" }),
        React.createElement("meta", { name: "msapplication-TileColor", content: "#0e90d2" }),
        React.createElement("link", { rel: "stylesheet", href: "/public/css/amazeui.min.css" }),
        React.createElement("link", { rel: "stylesheet", href: "/public/css/app.css" }),
        React.createElement("link", { rel: "stylesheet", href: "/public/public.css" }),
        React.createElement(
          "title",
          null,
          this.props.title
        )
      ),
      React.createElement(
        "body",
        null,
        this.props.children
      )
    );
  }
});

module.exports = DefaultLayout;
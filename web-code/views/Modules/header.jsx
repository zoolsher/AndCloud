import React from 'react'

var Header = React.createClass({
    render: function () {
        return (
            <header className="am-topbar am-topbar-inverse am-topbar-fixed-top">
                <h1 className="am-topbar-brand">
                    <a href="#">AndCloud</a>
                </h1>
                <div className="am-topbar-right">
                    <div className="am-dropdown" data-am-dropdown="{boundary: '.am-topbar'}">
                        <button className="am-btn am-btn-secondary am-topbar-btn am-btn-sm am-dropdown-toggle" data-am-dropdown-toggle>登录 <span className="am-icon-caret-down"></span></button>
                        <ul className="am-dropdown-content">
                            <li><a href="#">注册</a></li>
                            <li><a href="#">随便看看</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
})

module.exports = Header;
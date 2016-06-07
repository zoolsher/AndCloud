import React from 'react'

var Header = React.createClass({
    render:function(){
        return (
            <header className="am-topbar am-topbar-inverse">
                <button type="button" className="am-btn am-btn-default">默认演示</button>
            </header>
        );
    }
})

module.exports = Header;
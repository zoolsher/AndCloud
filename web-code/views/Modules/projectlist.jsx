import React from 'react';

var ProjectList = React.createClass({
    render: function () {
        
        return (
            <div>
                <div className="am-input-group">
                    <input type="text" className="am-form-field" />
                    <span className="am-input-group-btn">
                        <button className="am-btn am-btn-default" type="button"><span className="am-icon-search"></span></button>
                    </span>
                </div>
                <ul className="am-list am-list-border">
                    {
                        this.props.list.map($=>{return(
                            <li key={$.id}><a href="#">{$.title}</a></li>
                        );})
                    }
                </ul>
            </div>
        );
    }
});

module.exports = ProjectList;
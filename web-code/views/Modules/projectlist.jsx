import React from 'react';

var ProjectList = React.createClass({
    render: function () {
        var i = 0;
        var length = this.props.totalPage;
        var start = this.props.curPage-2>=1?this.props.curPage-2:1;
        var end = start+5>=length?length:start+5;
        var pageitems = [];
        pageitems.push(<li class="am-disabled"><a href="?curlPage=1">&laquo; </a></li>);
        for (i=start; i < end; i++) {
            var url = "?curPage="+i;
            if (i == this.props.curPage) {
                pageitems.push(<li className="am-active"><a href={url}>{i}</a></li>);
            } else {
                pageitems.push(<li className=""><a href={url}>{i}</a></li>);
            }
        }
        var totalUrl = "?curPage="+(length-1);
        pageitems.push(<li class="am-disabled"><a href={totalUrl} >&raquo; </a></li>);
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
                        this.props.list.map($ => {
                            return (
                                <li key={$.id}><a href="#">{$.title}</a></li>
                            );
                        })
                    }
                </ul>
                <ul className="am-util-pagination-zool am-util-pagination-zool-center ">
                    {pageitems}
                </ul>
            </div>
        );
    }
});

module.exports = ProjectList;
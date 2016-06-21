import React from 'react';
import {Link} from 'react-router';

const LeftPanel  = React.createClass({
	render(){
		const pageSize = 10;
		var totalPage = Math.ceil(this.props.td.length/pageSize)-1;
		var curPage = this.props.params.page;
		return(
			<div>
                <div className="am-input-group">
                    <input type="text" className="am-form-field" />
                    <span className="am-input-group-btn">
                        <button className="am-btn am-btn-default" type="button"><span className="am-icon-search"></span></button>
                    </span>
                </div>
                <ul className="am-list am-list-border am-list-striped">
                    {
                        this.props.td.filter((proj,index)=>{
							if(index>=(curPage-1)*pageSize&&index<curPage*pageSize){
								return true;
							}else{
								return false;
							}
						}).map((proj) => {
                            return (
                                <li key={proj.id}>

									<Link to={`/page/${curPage}/app/${proj.id}`}>

									{proj.title}
									<span className="am-badge am-badge-success">{proj.uploadTime}</span>
									</Link>
								</li>
                            );
                        })
                    }
                </ul>
                <ul className="am-pagination">
                    <li className="am-pagination-prev">
						<Link to={`/page/${this.props.params.page>1?this.props.params.page-1:1}`}>&laquo; 上一页</Link>
					</li>
                    <li className="am-pagination-next">
						<Link to={`/page/${this.props.params.page<=totalPage?Number(this.props.params.page)+1:this.props.params.page}`}>下一页 &raquo; </Link>
					</li>
                </ul>

            </div>
		);
	}
})

module.exports = LeftPanel;

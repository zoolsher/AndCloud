import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';

const levelStyle = {
    width: "20%"
}
const messageStyle = {
    width: "60%"
}
const timeStyle = {
    width: "20%"
}

const Log = React.createClass({
    queryLog() {
        var that = this;
        $.ajax({
            url: '/s/log/get',
            cache: false,
            success: function (data) {
                var json = JSON.parse(data);

                that.props.loadLogSuccess(json);
            },
            error: function () {
                that.props.loadLogFailed();
            }
        });
        this.props.loadLogStart();
    },
    render() {
        var data = [];
        if (this.props.log.state == "load_log_success") {
            var data = this.props.log.data["file"];
            return (
                <div>
                    <RaisedButton label="reload" fullWidth={true} onClick={this.queryLog} />
                    <pre style={{
                        paddingLeft: "30px",
                        paddingRight: "30px"
                    }}>
                        {
                            data.reduce(($$, $, index) => {
                                return $$ + `[${index}]` + $.timestamp + " - " + $.level + " - " + $.message + "\n";
                            }, "")
                        }
                    </pre>
                </div>
            )
        } else if (this.props.log.state == "load_log_start") {
            return (
                <div>
                    <RaisedButton label="reload" fullWidth={true} onClick={this.queryLog} />
                    <div style={{
                        width: "100%",
                        height: "200px",
                        padding: "10px"
                    }}>
                        <CircularProgress size={60} thickness={7} />
                        正在加载，请稍候
                    </div>
                </div>
            );
        } else {
            this.queryLog();
            return (
                <div>
                </div>
            );
        }
    }
})

export default Log;
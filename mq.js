var configData = require('./config');
// start bindSync the message quene
var zmq = require("zmq");
var logger = require("./server/lib/Logger");
var sock = zmq.socket("push");
var connect = configData["mq"]["connect"];
sock.bindSync(connect);
logger.info(`binding message queue success the connection is ${connect}`);
module.exports = sock;
var path = require('path');
var express = require('express');
const session = require('express-session');
var configData = require('./config');
var app = express();
const MongoStore = require('connect-mongo')(session);
var MongoClient = require('mongodb').MongoClient;
var logger = require('./server/lib/Logger');
var db;
var mq = require('./mq');

function isObject(o) {
    return Object.prototype.toString.call(o) == "[object Object]"
}

function configRouters(list, app, db) {
    if (!isObject(list)) {
        return;
    }
    for (var key in list) {
        console.log(key);
        var value = list[key];
        var router = value(db);
        app.use(key, router);
    }
    return;
}

if (process.env.NODE_ENV === "production") {
    app.use('/static', express.static(path.join(__dirname, 'dist')));
} else {
    var webpack = require('webpack');
    var config = require('./webpack.config.dev');
    var compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler));
}

app.use(session({
    secret: 'AndCloudSafeCodeKey',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        url: configData.db.session_url
    }),
    cookie: { maxAge: 24 * 60 * 60 * 1000 }// last a day long
}));
/**
 * static router
 * public-router
 */
app.use('/public', express.static(path.join(__dirname, 'public')));
/**
 * static router
 * amazeui-touch
 */
app.use('/touch', express.static(path.join(__dirname, 'node_modules', 'amazeui-touch', 'dist')));

/**
 * start the MongoClient DB_URL 
 */
MongoClient.connect(configData.db.db_url, function (err, database) {
    if (err) {
        logger.err("connect to mongodb err is %j", { err: err });
        throw err;
    }
    logger.info("connect to mongodb success");
    db = database;

    var pathStartsWithList = [
        '/user/login',
        '/s/user',
    ];
    app.use(function (req, res, next) {
        var inAllowList = pathStartsWithList.reduce((lastRes, curPath) => {
            return req.path.startsWith(curPath) || lastRes;
        })
        if ((req.session.user !== undefined && req.session.isLogin === true) || inAllowList) {
            next();
        } else {
            res.redirect('/user/login');
        }
    });

    var configTable = {
        '/s/user': require('./server/server-controllers/user/index'),
        '/s/project': require('./server/server-controllers/project/index'),
    }

    configRouters(configTable, app, db);

    app.get('/m/*', function (req, res) {
        res.sendFile(path.join(__dirname, 'index-mobile.html'));
    })

    app.get('/user/login/', function (req, res) {
        res.sendFile(path.join(__dirname, 'login.html'));
    });

    app.get('/report/*', function (req, res) {
        res.sendFile(path.join(__dirname, 'report.html'));
    })

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'index.html'));
    });
    app.listen(configData.server.PORT, configData.server.IP, function (err) {
        if (err) {
            logger.error("listen error is %j", { err: err });
            return;
        }

        logger.info(`Listening at http://${configData.server.IP}:${configData.server.PORT}`);
    });
});



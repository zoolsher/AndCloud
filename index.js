var path = require('path');
var express = require('express');
const session = require('express-session');
var configData = require('./config');
var app = express();
const MongoStore = require('connect-mongo')(session);
var MongoClient = require('mongodb').MongoClient;
var logger = require('./server/lib/Logger');
var db;


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

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/touch', express.static(path.join(__dirname, 'node_modules', 'amazeui-touch', 'dist')));


MongoClient.connect(configData.db.db_url, function (err, database) {
    if (err) {
        logger.err("connect to mongodb err is %j", { err: err });
        throw err;
    }
    logger.info("connect to mongodb success");
    db = database;

    app.use(function (req, res, next) {
        if (req.session.isLogin === true || req.path.startsWith('/user/login') || req.path.startsWith('/s/user')) {
            next();
        } else {
            res.redirect('/user/login');
        }
    });

    var userRouter = require('./server/server-controllers/user/index')(db);
    app.use('/s/user', userRouter);

    var projectRouter = require('./server/server-controllers/project/index')(db);
    app.use('/s/project', projectRouter);

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

var path = require('path');
var express = require('express');
const session = require('express-session');
var configData = require('./config');
var app = express();
const MongoStore = require('connect-mongo')(session);

if(process.env.NODE_ENV === "production"){
    app.use('/static',express.static(path.join(__dirname,'dist')));
}else{
    var webpack = require('webpack');
    var config = require('./webpack.config.dev');
    var compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler));
}

app.use(session({ secret: 'AndCloudSafeCodeKey',
    resave:false,
    store:new MongoStore({
        url:'mongodb://localhost:27017/ANDCLOUD_SESSION'
    }),
    cookie: { maxAge: 60000 }
}))

var userRouter = require('./server-controllers/user/index');
app.use('/s/',userRouter);




app.use('/public',express.static(path.join(__dirname,'public')));
app.use('/touch',express.static(path.join(__dirname,'node_modules','amazeui-touch','dist')));

app.get('/m/*',function(req,res){
    res.sendFile(path.join(__dirname,'index-mobile.html'));
})

app.get('/user/login/',function(req,res){
    res.sendFile(path.join(__dirname,'login.html'));
});


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(configData.server.PORT, configData.server.IP, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening at http://${configData.server.IP}:${configData.server.PORT}`);
});

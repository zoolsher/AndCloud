import React from 'react';
import express from 'express';
import adb from 'adbkit';
import expressReactDom from 'express-react-views';
import compression from 'compression';

var app = express();
var client = adb.createClient();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
var options = {
    beautify: true,
    babel: {
        presets: ['react', 'es2015']
    },
    transformViews: false
};
app.use(compression());
app.use('/public', express.static(__dirname + '/public'));
app.engine('jsx', expressReactDom.createEngine(options));
app.get('/', require('./routes').index);

app.listen(3000);
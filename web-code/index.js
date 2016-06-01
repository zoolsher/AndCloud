import React from 'react';
import express from 'express';
import adb from 'adbkit';
import expressReactDom from 'express-react-views';

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
app.engine('jsx', expressReactDom.createEngine(options));
app.get('/', require('./routes').index);
// app.get('/devicesList', (req, res) => {
//     client.listDevices()
//         .then(function(devices) {
//             res.send(JSON.stringify(devices));
//         })
//         .catch(function(err) {
//             console.error('Something went wrong:', err.stack)
//         });
// });

app.listen(3000);
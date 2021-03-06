var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: {
    desktop: [
      'webpack-hot-middleware/client',
      './client/client-desktop/index'
    ],
    mobile: [
      'webpack-hot-middleware/client',
      './client/client-mobile/index'
    ],
    login: [
      'webpack-hot-middleware/client',
      './client/client-login/index'
    ],
    report: [
      'webpack-hot-middleware/client',
      './client/client-report/index'
    ],
    admin: [
      'webpack-hot-middleware/client',
      './client/client-admin/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      },
      // CSS
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'client'),
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  }
};

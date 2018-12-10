const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')

var plugins = [
  new CleanWebpackPlugin(['dist']),
  new webpack.DefinePlugin({
    version: JSON.stringify(require('./package.json').version),
  })
];

module.exports = {
  mode: 'none',
  entry: path.resolve(__dirname, 'src/index.js'),
  plugins: plugins,
  externals: {
    clappr: 'Clappr'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.svg/, loader: 'svg-inline-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'clappr-pip.js',
    library: 'ClapprPip',
    libraryTarget: 'umd',
  },
  devServer: {
    contentBase: 'public/',
    host: '0.0.0.0',
    disableHostCheck: true,
    inline: false
  },
};

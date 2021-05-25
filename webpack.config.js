const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const esModules = ['react-icons'].join('|');

module.exports = {
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
};
// In the example above, the html-webpack-plugin generates an HTML file for your application by injecting automatically all your generated bundles.


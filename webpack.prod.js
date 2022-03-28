const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React TypeScript Webpack',
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)

  ],
});
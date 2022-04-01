const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, './public'),
    },
    proxy: {
      '/api/*': {
        target: 'http://localhost:3033',
        secure: false,
        changeOrigin: true,
        headers: {
          "Connection": "keep-alive"
        },
      pathRewrite: {
          '^/api' : ''
        }
      },
    },
    historyApiFallback: true,
    host: "localhost",
    port: 3000,
    hot: true,
  },
});
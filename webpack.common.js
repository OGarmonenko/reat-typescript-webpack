const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, './src/index.tsx'),
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.[t]sx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'assets',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      App: path.resolve(__dirname, 'src/App/'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      Components: path.resolve(__dirname, 'src/components/'),
      Interfaces: path.resolve(__dirname, 'src/interfaces/'),
      Store: path.resolve(__dirname, 'src/store/'),
      Utils: path.resolve(__dirname, 'src/utils/'),
      Assets: path.resolve(__dirname, 'src/assets/')
    },
  },
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pathToApp = path.resolve(__dirname, 'src', 'app');
const pathToNodeModules = path.resolve(__dirname, 'node_modules');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: true,
  title: 'React-Test',
});

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: './src/index.jsx',
    styles: './src/styles/index.css'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    modules: [pathToApp, pathToNodeModules]
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/},
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src', 'styles'), path.resolve(__dirname, 'node_modules')],
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.css$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: path.resolve(__dirname, 'src', 'styles'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
      }, {
        test: /\.(ttf|gif|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devServer: {
    compress: true,
    port: 5000,
    proxy: {
      '/api': {
        target: 'http://localhost:1337',
        pathRewrite: {'^/api' : ''}
      }
    }
  }
};
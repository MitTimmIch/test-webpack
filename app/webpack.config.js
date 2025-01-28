const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  return {
    mode: env.mode ?? 'production',
    entry:[
      path.resolve(__dirname, 'src', 'index.js'),
      path.resolve(__dirname, 'src', 'event-handlers.js'),
      path.resolve(__dirname, 'src', 'create-elements.js'),
      path.resolve(__dirname, 'src', 'create-keybords.js'),
      path.resolve(__dirname, 'src', 'game-logic.js')
    ],
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
        watch: true
      },
      port: 3000,
      hot: true,
      open: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html'),
        filename: env.mode === 'production'
          ? 'index.[contenthash].html'
          : 'index.html',
        inject: 'body'
      }),
      new MiniCssExtractPlugin()
    ],

    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader'
        },
        {
          test: /\.css$/i,
          use: [
            MiniCssExtractPlugin.loader,  // Должен быть ПЕРВЫМ
            'css-loader'     // Должен быть ВТОРЫМ
          ],
        }
      ]
    }
  };
}
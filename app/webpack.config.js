const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = (env) =>{
    return{
        mode: env.mode ?? 'production',
        entry: path.resolve(__dirname,  'src', 'index.js'),
        output: {
          filename: '[name].[contenthash].js',
          path: path.resolve(__dirname,  'dist'),
          clean: true
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            filename: 'index.[contenthash].html',
          })
        ],
        module: {
          rules: [
            {
              test: /\.html$/i,
              loader: 'html-loader'
            }
          ]
        }
      };
}
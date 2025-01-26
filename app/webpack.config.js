const path = require('path');

module.exports = (env) =>{
    return{
        mode: env.mode ?? 'production',
        entry: path.resolve(__dirname,  'src', 'index.js'),
        output: {
          filename: '[name].[id].[contenthash].js',
          path: path.resolve(__dirname,  'dist'),
          clean: true
        },
      };
}
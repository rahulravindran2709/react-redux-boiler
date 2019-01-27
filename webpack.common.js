
const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.js'
   },
   module: {
    rules: [{
      test: /\.js?$/,
      include: [path.resolve(__dirname,'src')],
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env','@babel/preset-react', '@babel/preset-flow']
      }
    }]
   },
   plugins: [
     new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
       title: 'Production',
       template: path.resolve(__dirname,'src/index.html')
     })
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist')
   }
 };

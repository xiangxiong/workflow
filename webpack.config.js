const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:'development',
  entry:'./src/index.tsx',
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  plugins:[
    new HTMLWebPackPlugin(
      {
        template: './src/index.html'
      }
    )
  ],
  resolve:{
    extensions: ['.ts','.tsx','.js','.jsx']
  },
  module:{
    rules:[
      {
        test: /\.js|jsx$/,
        use:{
          loader:'babel-loader',
          options:{
            presets:['@babel/env']
          }
        },
        exclude: /node_modules/, 
      },
      {
        test:/\.tsx?$/,
        exclude: /node_modules/,
        use:['ts-loader']
      }
    ]
  }
};
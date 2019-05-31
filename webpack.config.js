const path = require('path');

module.exports = {
  mode: 'development',
  //create and entry point to the application
  entry: {
    
    app:['./src/app.js',
          '@babel/polyfill'],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module:{
    rules:[{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        // npm install @babel/core @babel/preset-env
        //presets: ["@babel/preset-env"]
        presets: ["@babel/preset-env"],
        plugins: ["@babel/transform-runtime"]      
      }
    }]
  }
}

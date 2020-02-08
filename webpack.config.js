const path = require('path');
var webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    'Itinerary/public/bundle': path.resolve(__dirname, './Itinerary/client/index.jsx'),
    'Reviews/client/dist/bundle': path.resolve(__dirname, './Reviews/client/src/index.jsx'),
    'calendar-quote/public/AK-bundle': path.resolve(__dirname, './calendar-quote/client/src/index.jsx'),
    'Searchbar/client/dist/searchBarBundle': path.resolve(__dirname, './Searchbar/client/src/index.jsx'),
  },

  
  output: {
    path: path.resolve(__dirname, './'),
    filename: `[name].js`,
  },
  module: {
    rules: [
      {
        test: /\.js[x]?/s,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  node: {
    fs: 'empty'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', ".scss"],
    modules: [
      'node_modules'
    ]      
  }
};
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  devServer: {
    // historyApiFallback: true,
    contentBase: './',
    port: 3000,
    // hot: true,
    // open: true,
    // openPage: '',
    // watchContentBase: true,
    // progress: true,
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'script.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        // test: /\.css$/,
        // use: [
        //   "style-loader",
        //   {
        //     loader: "css-loader",
        //     options: {
        //       importLoaders: 1,
        //     },
        //   },
        // ],
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      // {
      //   test: /\.graphql?$/,
      //   use: [
      //     {
      //       loader: 'graphql-tag/loader',
      //     },
      //   ],
      // },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
}

const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "./src/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
            }
          },
        ],
       type: 'javascript/auto'
     },
      {
        test: /\.(sass|scss|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
    new HtmlWebpackPlugin({
      title: "Groupfarma",
      template: path.resolve(__dirname, "public", "index.html"), // template file
      filename: "index.html", // output file
      favicon: "./public/favicon.ico"
    }),
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
}

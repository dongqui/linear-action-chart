const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const path = require("./path");

module.exports = {
  entry: `${path.src}/index.js`,
  output: {
    path: path.build,
    filename: "[name].bundle.js",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  corejs: { version: 3, proposals: true },
                  useBuiltIns: "usage",
                  shippedProposals: true,
                  targets: {
                    browsers: [">= 1%, not dead"],
                  },
                },
              ],
            ],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Action linear graph",
      template: path.public + "/index.html",
      favicon: path.public + "/favicon.ico",
      filename: "index.html",
    }),
  ],
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".json", ".css", ".scss", "sass"],
  },
};

const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");
const path = require("./path");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    contentBase: paths.build,
    hot: true,
    port: 8000,
  },
});

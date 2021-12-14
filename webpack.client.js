const path = require("path");

module.exports = {
  target: "node",
  entry: "./src/index.client.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "static"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

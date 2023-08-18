const path = require("path");
const webpack = require("webpack");
const CURRENT_WORKING_DIR = process.cwd();
const config = {
  name: "browser",
  /* mode: sets process.env.NODE_ENV to the given value and tells Webpack
  to use its built-in optimizations accordingly. If not set explicitly, it defaults
  to a value of "production". It can also be set via the command line by
  passing the value as a CLI argument. */
  mode: "development",

  /* devtool: specifies how source maps are generated, if at all. Generally, a
source map provides a way of mapping code within a compressed file back
to its original position in a source file to aid debugging. */
  devtool: "eval-source-map",

  /* entry: specifies the entry file where Webpack starts bundling, in this case
with the main.js file in the client folder. */
  entry: [
    "webpack-hot-middleware/client?reload=true",
    path.join(CURRENT_WORKING_DIR, "client/main.js"),
  ],

  /* output: specifies the output path for the bundled code, in this case set to
dist/bundle.js. */
  output: {
    /*  publicPath: allows specifying the base path for all assets in the
application. */
    path: path.join(CURRENT_WORKING_DIR, "/dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },

  /* module: sets the regex rule for the file extension to be used for transpilation,
  and the folders to be excluded. The transpilation tool to be used here is
  babel-loader. */
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    /* HotModuleReplacementPlugin: enables hot module replacement for
    react-hot-loader. */
    new webpack.HotModuleReplacementPlugin(),

    /* NoEmitOnErrorsPlugin: allows skipping emitting when there are compile
errors.*/
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    /* add a Webpack alias to point react-dom references to the @hotloader/
react-dom version. */
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
};
module.exports = config;

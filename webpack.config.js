// const path = require("path");
// const webpack = require("webpack");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;
// const TerserPlugin = require("terser-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// let devtools = process.env.NODE_ENV === "development" ? "source-map" : false;
// let mode = "development";
// if (process.env.NODE_ENV === "production") {
//   mode = "production";
// }

// module.exports = {
//   mode: mode,
//   devtool: devtools,
//   entry: ["@babel/polyfill", "./src/index.js"],
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "[name].js",
//   },
//   devServer: {
//     contentBase: "./src",
//     port: 3000,
//     hot: true,
//     open: true,
//   },
//   optimization: {
//     runtimeChunk: "single",
//     moduleIds: "deterministic",
//   },
//   plugins: [
//     // new BundleAnalyzerPlugin(),
//     new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/),
//     new HtmlWebpackPlugin({ template: "./src/index.html" }),
//     new CleanWebpackPlugin(),
//   ],
//   resolve: {
//     extensions: [".js", ".jsx"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(css|scss)$/,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//       {
//         test: /\.(png|jp(e*)g|svg|gif)$/,
//         use: [
//           {
//             loader: "url-loader",
//             options: {
//               limit: 8000,
//               name: "images/[name].[ext]",
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(jsx|js)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-react", "@babel/preset-env"],
//           },
//         },
//       },
//     ],
//   },
// };

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

let mode = "development";
let target = "web";
let devtools = process.env.NODE_ENV === "production" ? false : "source-map";
if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  target: target,
  mode: mode,
  entry: ["@babel/polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
              name: "images/[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en-gb/),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: devtools,
  devServer: {
    contentBase: "./dist",
    port: "3000",
    open: true,
  },
};

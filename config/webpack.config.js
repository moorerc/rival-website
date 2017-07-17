const { CheckerPlugin } = require("awesome-typescript-loader");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

const plugins = [
    new CheckerPlugin(),
    new ExtractTextPlugin("[name].css"),
];
if (IS_PRODUCTION) {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production"),
            },
        })
    );
} else {
    plugins.push(
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    );
}

module.exports = {
    entry: {
        app: [
            "./src/index.tsx",
            "./src/styles/scss/index.scss",
        ],
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "../dist"),
    },

    resolve: {
        extensions: [ ".js", ".jsx", ".ts", ".tsx", ".scss" ],
    },

    devtool: IS_PRODUCTION ? false : "cheap-module-eval-source-map",

    module: {
      loaders: [
        {
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
            options: {
                configFileName: "./src/tsconfig.json",
            },
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!sass-loader",
            }),
        },
      ],
    },

    devServer: {
      headers: {
          "Access-Control-Allow-Origin": "*",
      },
      historyApiFallback: true,
      //https: false,
      inline: true,
      stats: "errors-only",
    },

    plugins,
};

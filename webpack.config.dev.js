const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.config.common.js');

module.exports = webpackMerge(common, {
    devtool: 'source-map',

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin(),
    ],

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 3000,
    },
});

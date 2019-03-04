var merge = require('webpack-merge');

// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var Visualizer = require('webpack-visualizer-plugin');

//Configs
var base = require('./webpack.config.js');

const prod = env => {
    return merge([
        {
            mode: 'production',
            optimization: {
                runtimeChunk: 'single',
                splitChunks: {
                    cacheGroups: {
                        vendor: {
                            test: /[\\/]node_modules[\\/]/,
                            name: 'vendors',
                            chunks: 'all',
                        },
                    },
                },
                minimizer: [new UglifyJsPlugin()],
            },
            plugins: [
                new MiniCssExtractPlugin(),
                new OptimizeCssAssetsPlugin(),
                new Visualizer({ filename: './statistics.html' }),
            ],
        },
    ]);
};

module.exports = env => {
    return merge(base(env), prod(env));
};

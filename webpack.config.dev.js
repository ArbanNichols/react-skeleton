const merge = require('webpack-merge');

//Configs
const base = require('./webpack.config.js');

const dev = env => {
    return merge([
        {
            devtool: 'inline-source-map',
            mode: 'development',
            devServer: {
                hot: true,
                port: 3000,
                historyApiFallback: true,
            },
        },
    ]);
};

module.exports = env => {
    return merge(base(env), dev(env));
};

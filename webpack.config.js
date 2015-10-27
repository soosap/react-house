'use strict';

var webpack = require('webpack');

module.exports = {
    entry: {
        top: [
            './src/main.scss'
        ],
        bottom: [
            './src/main.js'
        ]
    },
    output: {
        path: './dist/scripts',
        filename: '[name].bundle.js',
        publicPath: 'http://localhost:8080/'
    },
    watch: true,
    devServer: {
        contentBase: 'dist',
        stats: { colors: true }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jquery': 'jquery'
        })
    ],
    module: {
        preLoaders: [
            { test: /\.(js)$/, exclude: /(node_modules)/, loader: "jshint-loader" }
        ],
        loaders: [
            { test: /\.(css)$/, exclude: /node_modules/, loader: "style-loader!css-loader!autoprefixer-loader" },
            { test: /\.(scss)$/, exclude: /node_modules/, loader: "style-loader!css-loader!autoprefixer-loader!sass-loader" }
        ]
    }
};
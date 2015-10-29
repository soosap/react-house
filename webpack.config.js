'use strict';

var webpack = require('webpack');

module.exports = {
    entry: {
        top: [
            'bootstrap-sass!./src/styles/bootstrap/bootstrap-sass.config.js'
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
            // ESLint lints js code, including JSX
            { test: /(\.js$|\.jsx$)/, exclude: /(node_modules|bootstrap)/, loader: "eslint-loader" }

        ],
        loaders: [
            { test: /(\.js$|\.jsx$)$/, exclude: /(node_modules)/, loader: "babel-loader" },
            { test: /\.(css)$/, exclude: /(node_modules|bootstrap)/, loader: "style-loader!css-loader!autoprefixer-loader" },
            { test: /\.(scss)$/, exclude: /(node_modules|bootstrap)/, loader: "style-loader!css-loader!autoprefixer-loader!sass-loader" },

            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    eslint: {
        configFile: '.eslintrc'
    }
};
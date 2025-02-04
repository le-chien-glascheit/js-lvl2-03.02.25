const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 9090,
        watchFiles: ['./src/**/*'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle-[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.html$/i,
                use: ['html-loader']
            },
        ]
    },
    plugins: [
        new HtmlPlugin({
            filename: 'index.html',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[contenthash].css',
        }),
    ]
};
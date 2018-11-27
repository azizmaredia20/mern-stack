const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'client'),
    entry: {
        app: './index.js',
        vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux'],
        styles: './assets/main.scss',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name][hash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "./index.html"
        }),
        new ExtractTextPlugin('style.bundle.css'),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                loader: ExtractTextPlugin.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ],
                }),
            },
            // {
            //     test: /\.(png|jpg|gif)$/,
            //     use: [
            //         'file-loader',
            //     ],
            // },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        stats: { colors: true, chunks: false },
        port: "8282",
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
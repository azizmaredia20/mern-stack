const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const path = require('path');

const env = process.env.NODE_ENV

module.exports = (env, argv) => ({
    context: path.join(__dirname, 'client'),
    mode: argv.mode === 'production' ? 'production' : 'development',
    entry: {
        app: './index.js',
        styles: './assets/main.scss',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name][hash].js',
    },
    devtool: argv.mode === 'production' ? 'eval' : 'source-maps',
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            },
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    argv.mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new ManifestPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: "./index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: path.join(__dirname, 'dist', 'styles.css'),
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        stats: { colors: true, chunks: false },
        port: "8282",
    },
});

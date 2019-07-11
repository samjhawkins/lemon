/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src/app');

module.exports = env => {
    const { PLATFORM, VERSION } = env;
    return merge([
        {
            entry: APP_DIR,
            module: {
                rules: [
                    {
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader'
                        }
                    },
                    {
                        test: /\.(scss|css)$/,
                        use: [
                            PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
                            {
                                loader: 'css-loader',
                                options: {
                                    importLoaders: 1,
                                    localIdentName: '[name]__[local]___[hash:base64:5]',
                                    modules: true,
                                    sourceMap: true,
                                },
                            },
                            'sass-loader'
                        ]
                    },
                    {
                        test: /\.(ttf|eot|woff|woff2|jpe?g|png|gif|svg)$/,
                        use: [
                            {
                                loader: "file-loader",
                                options: {
                                    name: "fonts/[name].[ext]",
                                },
                            },
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: 5000,
                                },
                            }
                        ],
                    },
                ]
            },
            plugins: [
                new FriendlyErrorsWebpackPlugin(),
                new HtmlWebpackPlugin({
                    template: './src/app/html/index.html',
                    filename: './index.html'
                }),
                new webpack.DefinePlugin({
                    'process.env.VERSION': JSON.stringify(env.VERSION),
                    'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
                }),
            ],
            output: {
                filename: '[name].bundle.js',
                chunkFilename: '[name].chunk.bundle.js',
                path: path.resolve(__dirname, '..', 'dist'),
                publicPath: '/',
            },
            resolve: {
                extensions: ['.jsx', '.js'],
            },
            devServer: {
                contentBase: path.resolve(__dirname, './dist/'),
                compress: true,
                port: 9000
            },
        }
    ])
};
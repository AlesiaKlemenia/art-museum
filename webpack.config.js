const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

// Here goes all configuration
module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx','.ts','.tsx'],
        modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "public/index.html",
        })
    ],
    devServer: {
        host: 'localhost',
        historyApiFallback: true,
        port: 3000,
        open: true,
        hot: true,
    },
}

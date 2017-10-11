const webpack = require('webpack')
const path = require('path')


module.exports = {

    entry: path.resolve(__dirname,'./login.js'),
    output: {
        filename: 'login-prod.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader'
                }]
            }
        ]
    }
}
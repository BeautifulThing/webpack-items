
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
       new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            },{
                loader: 'sass-loader'
            }]
        },{
            test: /\.less$/,
            use: [{
                loader: 'style-loader'
            },{
                loader: 'css-loader'
            },{
                loader: 'less-loader'  
            }]
        }]
    }
}
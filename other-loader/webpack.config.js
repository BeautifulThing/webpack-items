
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
            test: /\.js/,
            use: {
                loader: 'babel-loader'
            },
            include: [path.resolve(__dirname, 'src')]
        },{
            test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    //10k
                    limit: 10240,
                    //生成资源名称
                    name: '[name].[hash:8].[ext]',
                    //生成资源的路径
                    outputPath: 'imgs/'
                }
            }
        }]
    }
}
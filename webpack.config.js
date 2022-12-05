const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        index: './src/index.js',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000,
        setup(app){
            const bodyParser = require('body-parser')
            app.use(bodyParser.json())
            app.get('./data', function(req,res){
                console.log(req)
                res.send('Get res sent from server')
            })
            app.post('./data', function(req, res){
                console.log(req.body)
                res.send('Post res sent from server')
            })
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'To-Do',
            template: './src/index.html',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    mode: 'development',
    optimization: {
        runtimeChunk: 'single',
    },
}
var path = require('path');
var webpack = require('webpack');

var WebpackDevServer = require('webpack-dev-server');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJsPlugin = require('uglify-js-plugin'); //开启代码压缩

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');

// var MODULES_PATH = path.join(ROOT_PATH, './node_modules'); // node包目录
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist'); // 最后输出放置公共资源的目录
// var DLL_PATH = path.resolve(ROOT_PATH, 'dll');

// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

// 获取打包任务入口文件
var entryUrl = require('./entrySrc.js');

module.exports = {
    // entry: {
    //     // index: [path.resolve(SRC_PATH, 'index.js')],
    //     // index: ['./src/js/index/index.js'],
    //     // first: ['./src/js/first/first.jsx'],
    //     vendor: ['jquery', 'react', 'react-dom'] //需要打包的的第三方插件
    // },
    entry: entryUrl,

    output: {
        path: BUILD_PATH,
        filename: "[name].js", //name对应entry中的键名
        publicPath: 'http://localhost:8088/dist' //运行目录
    },
    // 开启 dev source map
    devtool: 'eval-source-map',
    module: {
        loaders: [ // 把style&css&less loader改为
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
                exclude: /^node_modules$/

            },
             {
                 test: /\.scss$/,
                 loader: ExtractTextPlugin.extract("style", 'css!sass'),
                 exclude: /^node_modules$/
             },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css!less'),
                exclude: /^node_modules$/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url?limit=4000',
                exclude: /^node_modules$/
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /^node_modules$/
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /^node_modules$/
            }
        ]
    },

    devServer: {
        historyApiFallback: true,
        quiet: false, //控制台中输出打包的信息
        hot: true,
        colors: true,
        inline: true,
        lazy: false,
        progress: true, //显示打包的进度
        port: '8088'
    },
    // 配置 plugin
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.DllPlugin({
        //     path: '[name]-mainfest.json',
        //     name: '[name]_dll'
        // }),
        // //代码压缩
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.js',
            minChunks: 2
        }),
        // 把jquery作为全局变量插入到所有的代码中
        // 然后就可以直接在页面中使用jQuery了
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery'
        // }),
        new ExtractTextPlugin('[name].css'),
        new CopyWebpackPlugin([{
            from: './images',
            to: 'images'
        }]),

    ],
    resolve: {
        alias: {
            '{css}': ROOT_PATH + '/src/css',
            '{refer}': ROOT_PATH + '/src/refer',
        },
        extensions: ['', '.js', '.jsx']
    },


}
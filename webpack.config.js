var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');

// var MODULES_PATH = path.join(ROOT_PATH, './node_modules'); // node包目录
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist'); // 最后输出放置公共资源的目录

// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        // index: [path.resolve(SRC_PATH, 'index.js')],
        index: ['./src/index.js'],
        // login: [path.resolve(SRC_PATH, 'login.js')],
        // login: ['./src/login.js'],
        // vendors: ['jquery', 'moment'] //需要打包的的第三方插件
    },
    output: {
        path: BUILD_PATH,
        filename: "[name].js", //name对应entry中的键名
        publicPath: 'http://localhost:8088/dist' //运行目录
    },
    module: {
        loaders: [ // 把之前的style&css&less loader改为
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
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
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: ['babel-loader'],
            //     query: {
            //         'presets': ['es2015'],
            //         'plugins': [
            //             'transform-es3-property-literals',
            //             'transform-es3-member-expression-literals'
            //         ]
            //     }
            // }
        ]
    },
    // resolve: {
    //     root: 'modules',
    //     alias: {
    //         'mod/slider': '/path/mods/mod/slider/0.0.5',
    //         'mod/footer': '/path/mods/mod/footer/0.0.2',
    //         'mod/slider/0.0.3': '/path/mods/mod/slider/0.0.3',
    //         'mod/header': '/path/mods/mod/header/0.0.1',
    //         'mod/slider/0.0.1': '/path/mods/mod/slider/0.0.1'
    //     }
    // },
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
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendors',
        //     filename: 'common.bundle.js',
        //     minChunks: Infinity
        // }),
        // 把jquery作为全局变量插入到所有的代码中
        // 然后就可以直接在页面中使用jQuery了
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('style.css'),
        new CopyWebpackPlugin([{
            from: './images',
            to: 'images/'
        }])
    ],
    // devtool: 'source-map',

}
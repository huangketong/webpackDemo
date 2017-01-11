var path = require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin"); //打包css文件

var ROOT_PATH = path.resolve(__dirname);
var DLL_PATH = path.resolve(ROOT_PATH, 'dll');

var vendors = [
    'react',
    'react-dom',
    'jquery'
];

module.exports = {
    entry: {
        vendor: vendors
    },
    output: {
        path: DLL_PATH,
        filename: '[name].dll.js',
        library: '[name]_[hash]'
    },
    plugin: [
        new webpack.DllPlugin({
            path: '[name]-mainfest.json',
            name: '[name]_[hash]'
        }),
    ]
}

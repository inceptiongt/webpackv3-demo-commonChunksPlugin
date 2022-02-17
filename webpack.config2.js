const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const CWD = process.cwd();
const DLL_DIST = path.join(CWD, 'dll');
const SCOPE_DLL_DIST = path.join(CWD, 'scope-dll');

module.exports = {
    // mode: process.env.NODE_ENV,
    context: CWD,
    entry: ['./index', './index2', './index3'],
    devtool: false,
    output: {
        path: path.join(CWD, 'dist2'),
        filename: '[name].[hash].js'
    },
    plugins: [
        // reference dll
        // new webpack.DllReferencePlugin({
        //     manifest: path.join(DLL_DIST, 'manifest.json')
        // }),
        // new webpack.DllReferencePlugin({
        //     scope: 'scoped',
        //     manifest: path.join(SCOPE_DLL_DIST, 'manifest.json')
        // }),
        // generate index.html
        new HtmlPlugin({
            template: path.join(CWD, './index.html')
        }),
        // // insert vendors.js into html
        // new AddAssetHtmlPlugin([
        //     {
        //         filepath: path.join(DLL_DIST, 'dll.js'),
        //         includeSourcemap: false
        //     },
        //     {
        //         filepath: path.join(SCOPE_DLL_DIST, 'scope-dll.js'),
        //         includeSourcemap: false
        //     }
        // ])
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                console.log('chunk-node------->',module.request)
                return /node_modules/.test(module.context);
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib',
            // children: true,
            chunks: ['main'],
            minChunks: function (module) {
                console.log('chunk-1111------->',module.request)
                return /dep1/.test(module.request);
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'lib2',
            chunks: ['main'],
            minChunks: function (m) {
                console.log('chunk-2222------->',m.request)
                return /dep2/.test(m.request);
            }
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor',
        //     children: true,
        //     // chunks: ['index', 'index2', 'index3'],
        //     minChunks: function (module) {
        //         console.log('context..........222222',module.request)
        //         return /dep/.test(module.request);
        //     }
        // }),

    ]
}

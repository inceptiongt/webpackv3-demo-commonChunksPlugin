const path = require('path');
const webpack = require('webpack');

const CWD = process.cwd();
const DLL_DIST = path.join(CWD, 'dll');

module.exports = {
    mode: process.env.NODE_ENV,
    context: CWD,
    entry: [
        'lodash.map',
        'lodash.isboolean'
    ],
    devtool: false,
    output: {
        path: DLL_DIST,
        filename: 'dll.js',
        library: '[name]_[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            name: '[name]_[hash]',
            path: path.join(DLL_DIST, 'manifest.json')
        })
    ]
}

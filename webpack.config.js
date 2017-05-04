var path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: './app/main.js',
    output: {
        path: path.resolve('app'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: /app/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties']
                }
            }
        ]
    },
    devServer: {
        contentBase: './app',
        port: 9000,
        noInfo: false,
        stats: {
            chunks: false,
            colors: true
        }
    }
};

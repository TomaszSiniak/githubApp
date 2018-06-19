const path = require('path');

module.exports = {
    entry: {
        index: ['babel-polyfill','./src/app.js']
    },
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'bundle.js'
       
    },
    mode: 'development',
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.jsx?$/,
            exclude: /node_modules/
        },{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    resolve: {
        extensions: [".js", ".json", ".jsx"]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: {
            index: 'index.html'
          }
       
    }
}
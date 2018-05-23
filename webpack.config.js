const path = require('path');

module.exports = {
        entry: {
            app: './js/babel-test.js',
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: "/dist"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                    }
                }
            ]
        },
        mode: "development",
        devtool: 'inline-source-map',
        devServer: {
            contentBase: './js'
        },
};
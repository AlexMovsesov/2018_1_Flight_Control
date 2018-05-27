const path = require('path');
/**
 * Use for compiling scss style to one bundle, like in js
 */
const miniCss = require('mini-css-extract-plugin');

/**
 * This configuration helps in development by BEM methodology and also reduces network latency for loading
 */
module.exports = {
        cache: false,
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
                },
                {
                    test: /\.(s)*css$/,
                    use: [
                        miniCss.loader,
                        {loader: 'css-loader', options: {
                            sourceMap: true
                        }},
                        {loader: 'sass-loader', options: {
                            sourceMap: true
                        }}
                    ]
                },
            ]
        },
        plugins: [
            new miniCss({
                filename: "[name].bundle.css",
            })
        ],
        mode: "development",
        devtool: 'source-map',
        devServer: {
            contentBase: './js'
        },
        resolve: {
            alias: {
                pug: path.resolve('./js/utils/render/')
            }
        },
};
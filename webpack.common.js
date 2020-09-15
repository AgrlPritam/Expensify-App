//entry --> output
const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry:'./src/app.js',
    output: {
        path:path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }

        }, {
            test: /\.s?css$/,
            use: [
                {
                    loader: MiniCSSExtractPlugin.loader,
                    options: {
                      publicPath: (resourcePath, context) => {
                        return path.relative(path.dirname(resourcePath), context) + '/';
                      },
                    },
                },
                'css-loader',
                'sass-loader',
            ]
        }]
    },
    plugins: [new MiniCSSExtractPlugin({
        filename: 'styles.css'
    })]
} 
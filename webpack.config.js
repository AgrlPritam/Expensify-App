//entry --> output
const path = require('path')

module.exports = {
    entry:'./src/app.js',
    output: {
        path:path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    mode:'development',
    module: {
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env','@babel/preset-react'],
                    plugins: [
                        ["transform-class-properties", {"spec":true}]
                    ]
                }
            }
            
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {         //When we use devServer, we can delete bundle.js and the appl will run fine as it is now handled by webpack dev server which serves the appl from memory. to rebuild the bundle.js we need to run yarn run webpack and bundle.js will be re-created
        contentBase: path.join(__dirname, 'public')
    },

}
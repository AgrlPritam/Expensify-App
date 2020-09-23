//entry --> output
const path = require('path') 
const webpack = require('webpack')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if(process.env.NODE_ENV === 'test') {
    require('dotenv').config({path: './.env.test'})
} else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({path: './.env.development'})
}

module.exports = {
    entry:['core-js/stable','./src/app.js'],
    output: {
        path:path.join(__dirname,'public','dist'),
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
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap:true,
                        url: false
                    }
                },
                'sass-loader',
            ]
        }]
    },
    plugins: [new MiniCSSExtractPlugin({
            filename: 'styles.css'
        }),
        new webpack.DefinePlugin({
            'process.env.APIKEY': JSON.stringify(process.env.APIKEY),
            'process.env.AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
            'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
            'process.env.PROJECT_ID': JSON.stringify(process.env.PROJECT_ID),
            'process.env.STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
            'process.env.MESSAGING_SENDER_ID': JSON.stringify(process.env.MESSAGING_SENDER_ID),
            'process.env.APP_ID': JSON.stringify(process.env.APP_ID),
            'process.env.MEASUREMENT_ID': JSON.stringify(process.env.MEASUREMENT_ID)
        })
    ]
}
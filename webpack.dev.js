const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')

module.exports = merge(common, {
    mode: 'development',
    devtool: '@inline-source-map',
    devServer: {         //When we use devServer, we can delete bundle.js and the appl will run fine as it is now handled by webpack dev server which serves the appl from memory. to rebuild the bundle.js we need to run yarn run webpack and bundle.js will be re-created
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
    },

})
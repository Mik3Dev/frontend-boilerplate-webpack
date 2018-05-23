const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prod = merge(common, {
	devtool: 'source-map',
	mode: 'production'
});

prod.plugins.push(new CleanWebpackPlugin(['dist']));
prod.plugins.push(new UglifyJSPlugin({sourceMap: true}));
prod.plugins.push(new OptimizeCssAssetsPlugin({}));

module.exports = prod;
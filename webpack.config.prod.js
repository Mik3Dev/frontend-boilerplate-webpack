const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const prod = merge(common, {
	entry: {
		'app.min': './src/js/index.js' 
	},
	devtool: 'source-map',
	mode: 'production'
});

prod.plugins.push(new UglifyJSPlugin({
	sourceMap: true,
	include: /\.min\.js$/
}));

prod.plugins.push(new OptimizeCssAssetsPlugin({
	assetNameRegExp: /\.min.css$/
}));

module.exports = prod;
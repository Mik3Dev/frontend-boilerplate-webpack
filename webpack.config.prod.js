const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prod = merge(common, {
	entry: {
		'bundle.min': './src/js/index.js' 
	},
	devtool: 'source-map',
	mode: 'production'
});

prod.module.rules.push(
	{
		test: /\.css$/,
		use: [
			MiniCssExtractPlugin.loader,
			'css-loader'
		]
	},
	{
		test: /\.scss$/,
		use: [
			MiniCssExtractPlugin.loader,
			'css-loader',
			'sass-loader'
		]
	},
)

prod.plugins.push(new UglifyJSPlugin({
	sourceMap: true,
	include: /\.min\.js$/
}));

prod.plugins.push(new OptimizeCssAssetsPlugin({
	assetNameRegExp: /\.min.css$/
}));

prod.plugins.push(new CleanWebpackPlugin(['dist']));

prod.plugins.push(
	new MiniCssExtractPlugin({
	filename: '../css/[name].css',	
}));

module.exports = prod;
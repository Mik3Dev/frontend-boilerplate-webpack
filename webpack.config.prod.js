const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const prod = merge(common, {
	// devtool: 'source-map',
	mode: 'production',
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

prod.plugins.push(
	new HtmlWebpackPlugin({
		filename: '../index.html',
		template: './src/index.html'
	}));

prod.plugins.push(
	new UglifyJSPlugin({
		sourceMap: true,
		include: /\.min\.js$/
	}));

prod.plugins.push(
	new OptimizeCssAssetsPlugin({
		assetNameRegExp: /\.min.css$/
	}));

prod.plugins.push(
	new MiniCssExtractPlugin({
		filename: '../css/[name].css',	
	}));

module.exports = prod;
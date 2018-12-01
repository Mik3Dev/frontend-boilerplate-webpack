const merge = require('webpack-merge');
const common = require('./webpack.config.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dev = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	}
})

dev.module.rules.push(
	{
		test: /\.css$/,
		use: [
			'style-loader',
			'css-loader'
		]
	},
	{
		test: /\.scss$/,
		use: [
			'style-loader',
			'css-loader',
			'sass-loader'
		]
	}
)

dev.plugins.push(
	new HtmlWebpackPlugin({
		filename: 'index.html',
		template: './src/index.html'
	}));

module.exports = dev;
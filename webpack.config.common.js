const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: {
		app: './src/js/index.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: '../index.html',
			template: './src/index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '../css/[name].css',	
		}),
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/js')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
					},
					{
						loader: 'sass-loader',
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	}
}
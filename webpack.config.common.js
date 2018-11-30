const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		'bundle': './src/js/index.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: '../index.html',
			template: './src/index.html'
		})
	],
	output: {
		filename: '[name].js',
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
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			}
		]
	}
}
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		'bundle': './src/js/index.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist/js')
	},
	plugins: [
		new CleanWebpackPlugin(['dist'])
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
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const dev = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	}
});

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

module.exports = dev;
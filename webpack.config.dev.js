const merge = require('webpack-merge');
const common = require('./webpack.config.common');

const dev = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	}
});

module.exports = dev;
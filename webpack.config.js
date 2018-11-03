const path = require('path')
const LIBRARY_NAME = 'ske-12-ui'

module.exports = {
	entry: 'src/index.js',
	output: {
		path: path.resolve('lib'),
		filename: 'index.js',
		library: LIBRARY_NAME,
		libraryTarget: 'umd',
		umdNamedDefine: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
				loader: 'file-loader',
			},
		],
	},
	resolve: {
		modules: ['node_modules', path.resolve('./'), path.resolve('./src')],
	},
	devtool: 'source-map',
}

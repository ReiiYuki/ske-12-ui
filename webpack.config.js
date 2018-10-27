const path = require("path");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
	entry: 'src/index.js',
	output: {
		path: path.resolve('lib'),
		filename: 'index.js',
		library: 'ske-12-ui',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: 'babel-loader',
		}]
	},
	resolve: {
		modules: [
			'node_modules',
			path.resolve('./'),
			path.resolve('./src'),
		]
	},
	devtool: 'source-map',
	plugins: [
		new LodashModuleReplacementPlugin
	]
}

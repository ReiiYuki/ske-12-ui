const path = require('path')
const LIBRARY_NAME = 'ske-12-ui'
const SRC_PATH = path.join(__dirname, './src')
const STORIES_PATH = path.join(__dirname, './stories')

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
				test: /\.(ts|tsx)$/,
				include: [SRC_PATH, STORIES_PATH],
				use: [
					{
						loader: require.resolve('awesome-typescript-loader'),
					},
					{
						loader: require.resolve(
							'react-docgen-typescript-loader',
						),
					},
				],
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
				loader: 'file-loader',
			},
		],
	},
	resolve: {
		modules: ['node_modules', path.resolve('./'), path.resolve('./src')],
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	devtool: 'source-map',
}

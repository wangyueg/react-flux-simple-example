module.exports = {
	devServer: {
		contentBase: './dist',
		inline: true
	},
	devtool: 'cheap-module-source-map',
	entry: './js/app.js',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node-modules/,
				loader: 'jsx-loader',
			}
		]
	},
	output: {
		path: '/dist/assets',
		filename: 'bundle.js'
	}
}
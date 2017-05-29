const webpack = require('webpack')

module.exports = {
	entry: [
		'./src/index.jsx'
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}]
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/dist/',
		filename: 'bundle.js'
	},

	// minify: https://webpack.js.org/guides/production-build/
	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false
		}),
		new webpack.optimize.UglifyJsPlugin({
			beautify: false,
			mangle: {
				screw_ie8: true,
				keep_fnames: true
			},
			compress: {
				screw_ie8: true
			},
			comments: false
		})
	]
};

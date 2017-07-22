const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.jsx',
		vendor: ['react', 'react-dom', 'geopattern', 'react-router-dom']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader'
		}, {
			test: /\.css$/,
			use:  ExtractTextPlugin.extract({
				use: [{
					loader: 'css-loader',
					options: { importLoaders: 1, modules: true, localIdentName: '[local]' },
				}],
			}),
		}]
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/dist/',
		filename: 'bundle.js'
	},

	plugins: [
		// extract text
		new ExtractTextPlugin("styles.css"),
		// minify: https://webpack.js.org/guides/production-build/
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
		}),
		// vendor: https://webpack.github.io/docs/code-splitting.html#split-app-and-vendor-code
		new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
	]
};

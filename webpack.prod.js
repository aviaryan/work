const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.jsx',
		// vendor: ['react', 'react-dom', 'geopattern', 'react-router-dom', 'redux']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}, {
			test: /\.css$/,
			use:  ExtractTextPlugin.extract({
				use: [{
					loader: 'css-loader',
					options: { importLoaders: 1, modules: true, localIdentName: '[local]-[hash:base64:5]' },
				}],
			}),
		}]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		"alias": {
			"react": "preact-compat",
			"react-dom": "preact-compat"
		}
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	node: { Buffer: false },  // https://github.com/btmills/geopattern/issues/32
	plugins: [
		// extract text
		new ExtractTextPlugin("styles.css"),
		// minify
		new webpack.optimize.UglifyJsPlugin({
			mangle: true,
			compress: {
				warnings: false, // Suppress uglification warnings
				pure_getters: true,
				unsafe: true,
				unsafe_comps: true,
				screw_ie8: true,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true
			},
			comments: false
		}),
		// vendor: https://webpack.github.io/docs/code-splitting.html#split-app-and-vendor-code
		// new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
		// no need for vendor optimization as it is very small
	]
};

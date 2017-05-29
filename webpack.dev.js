module.exports = {
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./src/index.jsx'
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'react-hot-loader!babel-loader'
		}]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './',
		hot: true
	}
};

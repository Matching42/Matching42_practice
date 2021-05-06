module.exports = {
	entry: {
		main: './src/index.js'
	}
	resolve: {
		extensions: ['.js', '.jsx']
	},

	devtool: 'eval-cheap-source-map',

	devServer: {
		hot: true,
		overlay: true,
		writeToDisk: true,
	},

	const path = require('path');

	...
		output: {
	filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		  }


module: {
	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: '/node_modules/',
			loader: 'babel-loader'
		},
		{
			test: /\.css$/,
			use: [
				{ loader: 'style-loader' },
				{ loader: 'css-loader' }
			]
		},
		{
			test: /\.jfif$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]'
			}
		}
	]
},

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

plugins: [
	new CleanWebpackPlugin(),
	new HtmlWebpackPlugin({
		template: './public/index.html',
	})
]
  }
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",

	entry: "./src/index",

	resolve: {
		extensions: [".js", ".jsx"]
	},

	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: "babel-loader",
				exclude: /node_modules/
			}, {
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}, {
				test: /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: "url-loader",
				options: {
					name: "[hash].[ext]",
					limit: 10000
				}
			}]
	},

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js"
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: `./public/index.html`
		})
	],

	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 5500
	},
};
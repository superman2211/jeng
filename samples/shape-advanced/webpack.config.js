const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const isProduction = process.argv.indexOf('--mode=production') !== -1;

module.exports = {
	entry: './src/index.ts',
	devtool: isProduction ? false : 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: '../../templates/index.html',
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'assets', to: './assets' },
			],
		}),
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	optimization: {
		usedExports: true,
	},
};

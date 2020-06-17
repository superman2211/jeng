const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isProduction = process.argv.indexOf('--mode=production') !== -1;

module.exports = {
	entry: './src/index.ts',
	devtool: isProduction ? false : 'inline-sourcemaps',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin(),
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
};

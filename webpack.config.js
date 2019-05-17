const path = require('path')
const webpack = require('webpack')

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

// Helpers
const concat = (...paths) => path.resolve(__dirname, ...paths)

// Exports
module.exports = (env = {}) => {
	const isProduction = !!env.prod

	const babelOptions = {
		'presets': [
			['@babel/preset-env', { 'useBuiltIns': 'usage' }],
			'@babel/preset-react'
		],
		'plugins': [
			'babel-plugin-styled-components',
			'@babel/plugin-proposal-function-bind',
			'@babel/plugin-proposal-class-properties',
			'@babel/plugin-proposal-export-default-from'
		]
	}

	let plugins = [
		new HtmlWebpackPlugin({
			template: concat('www', isProduction ? 'index.prod.html' : 'index.dev.html'),
			filename: 'index.html',
			inject: 'body'
		}),
		new webpack.DefinePlugin({
			'API_PORT': JSON.stringify(':8000'),
			'DEVTOOLS': isProduction ? 'undefined' : 'window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()'
		})
	]

	const developmentPlugins = [
		new webpack.HotModuleReplacementPlugin()
	]

	const productionPlugins = []

	if (isProduction) {
		plugins.push(...productionPlugins)
	} else {
		plugins.push(...developmentPlugins)
	}

	return {
		mode: isProduction ? 'production' : 'development',
		entry: concat('app', 'src', 'index.js'),
		output: {
			publicPath: '/',
			path: concat('www'),
			filename: `scripts${isProduction ? '.[contenthash]' : ''}.js`,
			sourceMapFilename: `scripts${isProduction ? '.[contenthash]' : ''}.js.map`
		},
		resolve: {
			extensions: ['.js'],
			modules: [concat('app', 'src'), concat('common'), 'node_modules']
		},
		module: {
			rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: babelOptions
			},{
				test: /\.html$/,
				exclude: /node_modules/,
				loader: 'html-loader'
			},{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}]
		},
		plugins: plugins,
		optimization: {
			minimize: isProduction,
			minimizer: [
				new TerserWebpackPlugin({
					sourceMap: false,
					terserOptions: {
						compress: {
							passes: 1,
							toplevel: true
						},
						mangle: {
							eval: true,
							toplevel: true
						}
					}
				})
			]
		},
		devtool: isProduction ? false/*'nosources-source-map'*/ : 'source-map'/*cheap-module-eval-source-map*/,
		devServer: {
			stats: {
				colors: true,
				assets: false,
				chunks: false,
				modules: false,
				children: false
			},
			contentBase: concat('www'),
			historyApiFallback: true,
			watchContentBase: true,
			watchOptions: {
				ignored: /node_modules/
			},
			compress: true,
			hot: true,
			open: true,
			port: 8080,
			host: 'localhost'
		}
	}
}

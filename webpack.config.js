const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const path = require("path");

const WriteFilePlugin = require("write-file-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");



const GLOBALS = {
	"process.env.NODE_ENV": JSON.stringify("development"),
	"process.env.BUILD_ENV": JSON.stringify(process.env.BUILD_ENV || "local"),
};

const PATHS = {
	build: path.join(__dirname, "./build"),
	src: path.join(__dirname, "./src"),


	index: path.join(__dirname, "./src/pug/index.pug"),
	app: path.join(__dirname, "./src/js/App.js"),

	sass: path.join(__dirname, "./src/sass"),
	assets: path.join(__dirname, "./src/assets"),
	img: path.join(__dirname, "./src/img"),
};

exports.default = {
	devtool: "cheap-module-eval-source-map",

	context: PATHS.src,

	target: "web",

	mode: "development",

	resolve: {
		modules: [
			PATHS.sass,
			"node_modules"
		],
	},

	entry: {
		app: [
			"@babel/polyfill",
			"react-hot-loader/patch",
			"webpack-hot-middleware/client?reload=true",
			PATHS.app,
		],
	},

	output: {
		path: PATHS.build,
		publicPath: "http://localhost:8080/",
		filename: "js/app.js",
	},

	plugins: [
		new webpack.DefinePlugin(GLOBALS),
		new webpack.HotModuleReplacementPlugin(),

		new FriendlyErrorsWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: PATHS.index,
			inject: true,
		}),

		new WriteFilePlugin(),
		new CopyWebpackPlugin([{
			from: PATHS.assets,
			to: PATHS.build,
		}]),
	],

	optimization: {
		namedModules: true, // NamedModulesPlugin()
		noEmitOnErrors: true, // NoEmitOnErrorsPlugin
	},

	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			use: [{
				loader: "babel-loader",
				query: {
					plugins: [
						"react-hot-loader/babel"
					]
				}
			}],
		}, {
			test: /(\.css|\.scss|\.sass)$/,
			exclude: /(node_modules|bower_components)/,
			use: [{
				loader: "style-loader",
			}, {
				loader: "css-loader",
				options: {
					root: PATHS.src,
				},
			}, {
				loader: "postcss-loader",
				options: {
					plugins: [autoprefixer()],
				},
			}, {
				loader: "sass-loader",
				options: {
					includePaths: ["src/sass"],
				},
			}],
		}, {
			test: /\.(jpe?g|png|gif|ico)$/i,
			use: [{
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
					outputPath: "img",
				}
			}],
		}, {
			test: /(\.pug)$/,
			exclude: /(node_modules|bower_components)/,
			use: [{
				loader: "pug-loader",
			}],
		}, {
			test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
			use: [{
				loader: "svg-inline-loader",
			}]
		}],
	},
};

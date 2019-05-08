const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");



const GLOBALS = {
	"process.env.NODE_ENV": JSON.stringify("production"),
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
	context: PATHS.src,

	target: "web",

	mode: "production",

	resolve: {
		extensions: ["*", ".js", ".jsx", ".json"],
		modules: [
			PATHS.sass,
			"node_modules",
		],
	},

	entry: {
		app: [
			PATHS.app,
		],
	},

	output: {
		path: PATHS.build,
		publicPath: "/",
		filename: "js/app.[contenthash].js",
		chunkFilename: "js/vendor.[contenthash].js",
	},

	plugins: [
		new webpack.DefinePlugin(GLOBALS),

		new FriendlyErrorsWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/style.[contenthash].css",
			chunkFilename: "css/[id].[contenthash].css",
		}),
		new HtmlWebpackPlugin({
			template: PATHS.index,
			inject: true,
		}),

		new CopyWebpackPlugin([{
			from: PATHS.assets,
			to: PATHS.build,
		}]),

		new CompressionPlugin(),
	],

	optimization: {
		minimizer: [
			new TerserPlugin(),
		],

		splitChunks: {
			chunks: "all",
		},
	},

	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /(node_modules|bower_components)/,
			use: [{
				loader: "babel-loader",
			}],
		}, {
			test: /(\.css|\.scss|\.sass)$/,
			exclude: /(node_modules|bower_components)/,
			rules: [{
				loader: MiniCssExtractPlugin.loader,
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
			}],
		}],
	},
};

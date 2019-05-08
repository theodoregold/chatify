const express = require("express");
const webpack = require("webpack");
const dev = require("webpack-dev-middleware");
const hot = require("webpack-hot-middleware");
const path = require("path");
const open = require("open");

const CONFIG = require("../webpack.config.js").default;



const STATS = {
	chunks: false,
	children: false,
	colors: true,
	env: true,
	modules: false,
};

const OPTIONS = {
	historyApiFallback: true,
	hot: true,
	port: 8080,
	publicPath: "/",
	watchOptions: {
		ignored: /node_modules/,
		poll: 1000,
	},
	stats: STATS,
};

const app = express();
const compiler = webpack(CONFIG);

app.use(dev(compiler, OPTIONS));
app.use(hot(compiler));

app.get("*", (req, res, next) => {
	const filename = path.join(compiler.outputPath, "index.html");

	compiler.outputFileSystem.readFile(filename, (error, result) => {
		if (error) return next(error);

		res.set("Content-Type", "text/html");
		res.send(result);
		res.end();
	});
});

app.listen(OPTIONS.port, (error) => {
	if (error) {
		console.log(error);
		return 1;
	}

	open(`http://localhost:${OPTIONS.port}`);
});

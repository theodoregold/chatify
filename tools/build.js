const webpack = require("webpack");

const CONFIG = require("../webpack.config.build.js").default;



const STATS = {
	chunks: false,
	children: false,
	colors: true,
	env: true,
	modules: false,
};

webpack({
	...CONFIG,
	performance: {
		hints: false,
	},
}).run((error, stats) => {
	if (error) {
		console.log(error, "error");
		return 1;
	}

	console.info(stats.toString(STATS));

	return 0;
});

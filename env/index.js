const env = process.env.BUILD_ENV || "local";
const config = require(`./${env}`);

export default config.default;

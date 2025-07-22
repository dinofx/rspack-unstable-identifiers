/** @type { import('@rspack/core').RspackOptions } */
module.exports = {
	context: __dirname,
	mode: "production",
	entry: "./index.js",
  output: {
    clean: true,
  },
  resolve: {
    alias: {
      "my-lib": `${__dirname}/packages/my-lib-v1`,
    }
  }
};

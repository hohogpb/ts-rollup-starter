const resolve = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");
const commonjs = require("@rollup/plugin-commonjs");

module.exports = [
  {
    input: "./src/index.ts",
    output: {
      dir: "dist",
      format: "cjs",
      entryFileNames: "[name].cjs.js",
    },
    plugins: [resolve(), commonjs(), typescript()],
  },
  {
    input: "./src/index.ts",
    output: {
      dir: "dist",
      format: "esm",
      entryFileNames: "[name].esm.js",
    },
    plugins: [resolve(), commonjs(), typescript()],
  },
];

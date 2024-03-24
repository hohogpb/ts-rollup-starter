const resolve = require("@rollup/plugin-node-resolve");
const typescript = require("@rollup/plugin-typescript");
const commonjs = require("@rollup/plugin-commonjs");
const terser = require("@rollup/plugin-terser");

module.exports = [
  {
    input: "./src/index.ts",
    output: {
      dir: "dist",
      format: "cjs",
      entryFileNames: "[name].cjs.js",
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      terser({ mangle: { toplevel: true } }),
    ],
  },
  {
    input: "./src/index.ts",
    output: {
      dir: "dist",
      format: "esm",
      entryFileNames: "[name].esm.js",
      sourcemap: true,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      terser({ mangle: { toplevel: true } }),
    ],
  },
];

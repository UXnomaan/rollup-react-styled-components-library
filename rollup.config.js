import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "rollup-plugin-babel";

const packageJson = require("./package.json");

export default {
  input: "src/index.js",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  external: ["styled-components"],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      runtimeHelpers: true,
      sourceMaps: true,
      inputSourceMap: true,
      plugins: ["babel-plugin-styled-components"],
      presets: ["react-app", "@babel/preset-env", "@babel/preset-react"],
    }),
    // typescript({ useTsconfigDeclarationDir: true })
  ],
};

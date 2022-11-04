import resolve from "@rollup/plugin-node-resolve";
import styles from "rollup-plugin-styles";
import { vanillaExtractPlugin } from "@vanilla-extract/rollup-plugin";

const extensions = [".js", ".ts"];

export default {
  input: "src/index.ts",
  output: {
    format: "es",
    dir: "dist",
    preserveModules: true,
    preserveModulesRoot: "src",
  },
  plugins: [
    vanillaExtractPlugin(),
    printFiles(), // uncomment to see rollup-processed files
    styles({
      mode: "inject",
      modules: true,
    }),
    resolve({ extensions }),
  ],
};

function printFiles() {
  return {
    name: "rollup-plugin-print-files",
    load(id) {
      console.log(id);
    },
  };
}

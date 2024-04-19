import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import eslint from '@typescript-eslint/eslint-plugin'
/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["src/**"],
  },
  eslintPluginPrettierRecommended,
];

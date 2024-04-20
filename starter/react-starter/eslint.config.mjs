import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import hooksPlugin from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      // parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: import.meta.dirname, // node>20.11.0
      },
    },
    plugins: {
      "react-hooks": hooksPlugin,
      "react-refresh": reactRefresh,
      // "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
    // ignores: ["**/*.js", "**/*.cjs", "**/*.mjs"],
  },
  {
    ignores: ["eslint.config.mjs", ".prettierrc.mjs"],
  },
  // 禁用js文件类型感知  和忽略有什么区别？
  // {
  //   files: ["*.js", "*.cjs", "*.mjs"],
  //   ...tseslint.configs.disableTypeChecked,
  // },
);

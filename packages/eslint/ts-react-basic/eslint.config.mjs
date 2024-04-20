import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import hooksPlugin from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname, // node>20.11.0
      },
    },
    plugins: {
      "react-hooks": hooksPlugin,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  // 禁用js文件类型感知  和忽略有什么区别？
  {
    files: ["*.js"],
    ...tseslint.configs.disableTypeChecked,
  }
);

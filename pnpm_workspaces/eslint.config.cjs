import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

// root 在哪儿添加？
// plugin 在哪儿添加？
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
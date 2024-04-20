/** @type {import('eslint').Linter.Config} */
export default {
    ignorePatterns: ["eslint.config.js"],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        semi: "error",
        "prefer-const": "error",
    },
}
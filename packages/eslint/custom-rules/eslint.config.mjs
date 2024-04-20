import noDoubleUnderscore from './eslint/rules/no-double-underscore-variable.mjs'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    {
        plugins: {
            internal: {
                rules: {
                    "no-double-underscore-variable": noDoubleUnderscore,
                },
            },
        },
        rules: {
            semi: "error",
            "prefer-const": "error",
            "internal/no-double-underscore-variable": "error",
        },
    },
];
// eslint.config.js
import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
    // js.configs.recommended,
    // eslintConfigPrettier,
    {
        files: ['src/**'], // 包含
        // ignores [] 排除
        // languageOptions: {
        //     ecmaVersion: 'latest',
        //     sourceType: 'module'
        // },
        rules: {
            // "no-unused-vars": "warn",
            // "no-undef": "warn",
            semi: 'error',
        },
    },
    eslintPluginPrettierRecommended,
];

/** @type {import("prettier").Config} */
const config = {
    experimentalTernaries: false,// 三元运算符默认
    printWidth: 80, // 单行最大宽度
    tabWidth: 2, // 锁进空格数
    useTabs: false,// 使用制表符作为锁进
    semi: true,// 语句末尾添加分号
    singleQuote: false, // 使用单引号
    quoteProps: 'as-needed', // 仅在需要时在对象键上添加引号
    jsxSingleQuote: false, // 在jsx中使用单引号
    trailingComma: 'all',// 尾随逗号
    bracketSpacing: true, // 对象{ 两边有空格 }
    bracketSameLine: false, // html最后的尖括号放在最后一行末尾
    htmlWhitespaceSensitivity: 'css',
}

export default config
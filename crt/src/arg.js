import minimist from 'minimist'
// 主要用来解析参数
// const argv = minimist(process.argv.slice(2), { string: ['_'] })
// const cwd = process.cwd()

const argv = minimist(process.argv.slice(2));
console.log(argv);
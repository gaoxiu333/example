console.log('我是 commonjs 模块的man文件')

~(async () => {
    const esModule = await import('./es_foo.mjs')
    console.log('我引入了ES模块文件', esModule)
    console.log(esModule.a)
})()
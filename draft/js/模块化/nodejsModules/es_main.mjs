
import commonjsModule from './c_main.cjs'
import * as esModule from './es_foo.mjs'
console.log('我是 ES Module')

console.log('我引入了一个commonjs模块文件', commonjsModule)
console.log('我引入了和自己相同的文件', esModule)

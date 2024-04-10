import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'


export default {
    build: {
        lib: { // 构建库
            entry: resolve(__dirname, 'src/main.ts'),
            formats: ['es', 'umd', 'cjs', 'iife'],
            name:'lib', // 存在um或者iife时，需要name作为全局变量的名字
            fileName:'main' // 生成文件名称，默认package.json中的name
        }
    },
    resolve: { alias: { src: resolve('src/') } },
    plugins: [dts()],
}

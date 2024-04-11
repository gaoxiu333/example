import { exec } from 'child_process'

console.log('start')
exec('npm create vite', (error, stdout, stderr) => {
    if (error) {
        console.error('执行 npm 命令出错：', error)
    }
    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
})
console.log('end')
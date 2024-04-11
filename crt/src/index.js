import { exec } from 'child_process'

// 执行 npm create 命令
const npmCreateProcess = exec('npm create');

// 将 npm create 命令的输出流连接到当前进程的标准输出流
npmCreateProcess.stdout.pipe(process.stdout);

// 监听命令执行完成事件
npmCreateProcess.on('close', (code) => {
    console.log(`npm create 命令执行完成，退出码：${code}`);
});
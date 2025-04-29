# VS Code Debugging 使用说明

## task

使用 `⇧⌘B` 进行编译，比如 根据 `tsconfig.json` 编译 Typescript
VS Code 会自动检测 Gulp、Grunt 和 Jake 等的任务，或者在 `.vscode/tasks.json` 中配置任务。

## 断点

VS Code 有多种断点类型

- 条件断点
- 内联断点
- 函数断点
- 数据断点
- 日志点

## 调试配置

在 `.vscode/launch.json` 中配置调试器，比如，配置入口起点、附加到正在运行的应用程序或设置环境变量

在 VS Code 中，有两种核心调试模式：Launch 和 Attach

配置中的一些变量

- `${workspaceFolder}` 当前工作区的路径
- `${file}` 当前打开的文件
- `${env:Name}` 环境变量
- 查看更多：https://code.visualstudio.com/docs/reference/variables-reference

## 重定向输入输出

将输入/输出重定向到调试目标/从调试目标重定向输入/输出，是用来做什么的，主要有哪些用途？

## 启用浏览器的远程调试

如果使用 attach 方式调试，需要使用以下方式开启 Chrome 的远程调试

```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --remote-debugging-port=9222&
```

## node 调试

在 VS Code 中调试 Node.js 应用程序时，通常会使用 `launch.json` 来配置调试器。以下是一些常用的配置选项(启用时会自动添加)：

| 命令                        | 作用                         |
| :-------------------------- | :--------------------------- |
| `node app.js`               | 普通启动，不可远程调试       |
| `node --inspect app.js`     | 开启远程调试，但不自动打断点 |
| `node --inspect-brk app.js` | 开启远程调试，并在第一行暂停 |

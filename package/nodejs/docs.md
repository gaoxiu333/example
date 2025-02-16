## express-generator 生成项目
```bash
npx express-generator -h
npx express-generator --view=pug baseapp01
```
运行
```bash
# mac
DEBUG=baseapp01:* npm start
# win
set DEBUG=baseapp01:* & npm start
```

## 中间件
中间件时 nodejs 的重要概念
- 可以访问`请求对象 req`和`响应对象 res`
- 那么就可以做很多事情，比如：修改请求或者响应，记录日志等。
- `next` 当前中间件执行完必须调用，不然请求会被挂起。
**中间件原理** 
- 实现一个类似 express 中间件的设计。
- 还有koa？
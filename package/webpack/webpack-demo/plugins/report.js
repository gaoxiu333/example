const path = require("path");
module.exports = function (source) {
  const callback = this.async();
  const filePath = this.resourcePath;


  // 统计有效代码行数
  const lines = source
    .split("\n")
    .map((line) => line.trim()) // 去除行首行尾空格
    .filter((line) => line !== "" && !line.startsWith("//")); // 过滤空行和单行注释

  // 将结果存储到 Webpack 的 cacheable 机制中
  this.cacheable && this.cacheable();

  // 输出统计结果
  console.log(`[Line Counter] ${filePath}: ${lines.length} 行`);

  callback(null, source);
};

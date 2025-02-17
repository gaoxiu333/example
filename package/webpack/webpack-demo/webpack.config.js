const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // 只处理 JavaScript/TypeScript 代码
        include: path.resolve(__dirname, "src"), // 仅统计 src 目录下的文件
        use: path.resolve(__dirname, "plugins/report.js"),
      },
    ],
  },
};

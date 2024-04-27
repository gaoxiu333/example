import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '');
  return {
    build:
      command == 'serve'
        ? {}
        : {
            lib: { entry: resolve(__dirname, 'src/main.ts'), formats: ['es'] },
          },
    resolve: { alias: { src: resolve('src/') } },
  };
});

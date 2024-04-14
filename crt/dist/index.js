#!/usr/bin/env node
import spawn from "cross-spawn";
import path from "path";
import fs from 'fs/promises';
import { fileURLToPath } from "url";
// TODO: 检查package中是否存在，如果已经存在了怎么办？
// TODO: 检查配置文件是否存在，存在是否要提示，将要被覆盖？
const args = [
    'install',
    '--no-audit', // https://github.com/facebook/create-react-app/issues/11174
    '--save',
    '--save-exact',
    '--loglevel',
    'error',
];
const cwd = process.cwd();
const PKGS = [
    {
        name: 'eslint',
        args: []
    },
    {
        name: 'prettier',
        args: []
    },
    {
        name: 'eslint-plugin-prettier',
        args: [],
    },
    {
        name: 'eslint-config-prettier',
        args: []
    },
    {
        name: 'husky',
        args: []
    },
    {
        name: 'lint-staged',
        args: []
    }
];
initInstall();
await initConfig();
initGitHooks();
// 安装PKGS中定义的包
async function initInstall() {
    const allCommand = PKGS.map(Object.values).flat(2);
    const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent);
    const pkgManager = pkgInfo ? pkgInfo.name : 'npm';
    // const isYarn1 = pkgManager === 'yarn' && pkgInfo?.version.startsWith('1.')
    try {
        spawn.sync(pkgManager, [...args, ...allCommand], { stdio: 'inherit' });
    }
    catch (error) {
    }
}
// 写入配置
async function initConfig() {
    const templateDir = path.resolve(fileURLToPath(import.meta.url), '../..', 'public');
    const files = await fs.readdir(templateDir);
    for (const file of files) {
        fs.copyFile(path.join(templateDir, file), path.join(cwd, file));
    }
}
// 配置 git hooks
async function initGitHooks() {
    const huskyFolder = path.join(cwd, '.husky');
    const stats = await fs.stat(huskyFolder);
    if (!stats.isDirectory()) {
        fs.mkdir('.husky', { recursive: true });
    }
    fs.writeFile(path.join(cwd, '.husky', 'pre-commit'), 'npx lint-staged');
}
// 获取包管理器是哪个？pnpm、yarn、npm
function pkgFromUserAgent(userAgent) {
    if (!userAgent)
        return undefined;
    const pkgSpec = userAgent.split(' ')[0];
    const pkgSpecArr = pkgSpec.split('/');
    return {
        name: pkgSpecArr[0],
        version: pkgSpecArr[1],
    };
}
// npm create?? 
//# sourceMappingURL=index.js.map
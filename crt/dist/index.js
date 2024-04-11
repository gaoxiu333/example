import spawn from "cross-spawn";
const cwd = process.cwd();
console.log('cwd', process.env.npm_config_user_agent);
// const pkg
spawn.sync('pnpm', ['add', 'lodash'], { stdio: 'inherit' });
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
const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent);
const pkgManager = pkgInfo ? pkgInfo.name : 'npm';
const isYarn1 = pkgManager === 'yarn' && pkgInfo?.version.startsWith('1.');
console.log('pkgManger', pkgManager);
//# sourceMappingURL=index.js.map
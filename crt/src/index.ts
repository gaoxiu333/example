import spawn from "cross-spawn";

const cwd = process.cwd()
console.log('start')

const PKGS = [
    {
        name: 'eslint',
        args: ['-D', '--save-exact']
    },
    {
        name: 'prettier',
        args: ['-D', '--save-exact']
    }
]

const INIT = [

]
const allCommand = PKGS.map(Object.values).flat(2)
console.log('cwd', allCommand)
// const pkg
// TODO: 检查package中是否存在，如果已经存在了怎么办？

function pkgFromUserAgent(userAgent: string | undefined) {
    if (!userAgent) return undefined
    const pkgSpec = userAgent.split(' ')[0]
    const pkgSpecArr = pkgSpec.split('/')
    return {
        name: pkgSpecArr[0],
        version: pkgSpecArr[1],
    }
}

const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
const pkgManager = pkgInfo ? pkgInfo.name : 'npm'
const isYarn1 = pkgManager === 'yarn' && pkgInfo?.version.startsWith('1.')
spawn.sync(pkgManager, ['add', ...allCommand], { stdio: 'inherit' })

console.log('pkgManger', pkgManager)
/**
 * 写一些简单的工具函数
 * 当然只是一些伪代码，用来巩固思维
 */

// React 中的缓存伪代码

function memoize(fn){
    let cachedArg
    let cachedResult
    return function(arg){
        if(cachedArg === arg){
            return cachedResult
        }
        cachedArg = arg
        cachedResult = fn(arg)
        return cachedResult
    }
}

// @ts-nocheck
// TODO: 暂时仅用了语法检查，逐步补充类型
/**
 * 写一些简单的工具函数
 * 当然只是一些伪代码，用来巩固思维
 */

// React 中的缓存伪代码

function memoize(fn) {
  let cachedArg
  let cachedResult
  return function (arg) {
    if (cachedArg === arg) {
      return cachedResult
    }
    cachedArg = arg
    cachedResult = fn(arg)
    return cachedResult
  }
}


/**
* 判断是否是浏览器环境和webWorker
* ref: require.js
*/
const isBrowser = !!(typeof window !== 'undefined' && typeof navigator !== 'undefined' && window.document)
const isWebWorker = !isBrowser && typeof importScripts !== 'undefined'
// 是否是函数和数组
function isFunction(it) {
  return Object.toString.call(it) === '[object Function]';
}

function isArray(it) {
  return Object.toString.call(it) === '[object Array]';
}

/**
* 遍历对象，并且调用一个函数，如果函数返回值不为真，则跳出循环
* 需要过滤非原型属性
*/

function eachProp(obj, fn) {
  for (let prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      if (fn(obj[prop], prop)) break
    }
  }
}

// 实现一个 Function.prototype.bind
function bind(obj, fn) {
  return function (...args) {
    fn.apply(args)
  }
}
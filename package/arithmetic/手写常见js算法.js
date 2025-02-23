

/**
 * 手写bind
 * case: 
 * 1. 给定一个 user = {name:'Bob'}
 * 2. const newFn = print.bind(user,...args)
 * 3. newFn()   // 打印 user.name
 */
Function.prototype.myBind = function (ctx, ...bindArgs) {
  const _self = this;
  return function F(...args) {
    if (this instanceof F) {
      return new self(...bindArgs, ...args);
    }
    return _self.apply(ctx, bindArg.concat(args));
  };
};

/**
 * 手写 call
 * case: 
 * 1. 给定一个 user = {name:'Bob'}
 * 2. print.call(user,...args) // 打印 user.name
 * 
 */
Function.prototype.myCall = function (ctx = window, ...args) {
  const fnKey = Symbol();
  ctx[fnKey] = this;
  const result = ctx[fnKey](...args);
  return result;
};


/**
 * 手写 apply
 * case
 * 1...
 * 2...
 */

Function.prototype.myApply = function (ctx = window, args = []) {
  const fnKey = Symbol();
  ctx[fnKey] = this;
  const result = ctx[fnKey](...args);
  delete ctx[fnKey];
  return result;
};

/**
 * 手写 instanceof
 * case
 * 1. 原型链继承检测
 * 2. 如：myInstanceof(child, Parent)
 */
function myInstanceof(obj,constructor){
    let prototype = Object.getPrototypeOf(obj)
    while (prototype !== null){
        if(prototype === constructor.prototype){
            return true
        }
        prototype === Object.getPrototypeOf(prototype)
    }
}

// 手写快速排序
// 数组去重
// async await 设计和实现
// require 和 import 的区别
// 这写算法的注意要点！
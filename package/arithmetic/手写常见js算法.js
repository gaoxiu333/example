/**
 * 手写 call
 */
Function.prototype.myCall = function (ctx = window, ...args) {
  const fnKey = Symbol();
  ctx[fnKey] = this;
  const result = ctx[fnKey](...args);
  return result;
};

// 使用示例
function greet(name) {
  console.log(`Hello ${name}, I'm ${this.name}`);
}
const obj = { name: "Alice" };
greet.myCall(obj, "Bob"); // 输出: Hello Bob, I'm Alice

/**
 * 手写bind
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
 * 手写 apply
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
// 手写一个 instanceof
// async await 设计和实现
// require 和 import 的区别
// 这写算法的注意要点！
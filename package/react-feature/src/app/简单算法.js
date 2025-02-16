// 扁平化
const arr = [1, [{ a: 2 }, [3, [4, 5]]], 6];
arr.flat(Infinity);
// 替换
const replaceToArr = (arr) => {
  return JSON.parse(
    `[${JSON.stringify(arr).replaceAll("]", "").replaceAll("[", "")}]`
  );
};

const fn = (arr, result = []) => {
  if (!Array.isArray(arr)) {
    result.push(arr);
    return result;
  }
  arr.forEach((a) => fn(a, result));
  return result;
};
// 深拷贝
// 递归
const deepClone = (obj, newObj) => {
  if (typeof obj === "object" && obj !== null) {
    const keys = Object.keys[obj];
    newObj = Array.isArray(obj) ? [] : {};
    for (let key in keys) {
      newObj[key] = deepClone(obj[key]);
    }
  } else {
    newObj = obj;
  }
  return newObj;
};
// 防抖,延迟n秒执行，延迟期间又有新的事件，再次n秒延迟。
const debounce = (fn, delay) => {
  let timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  };
};
// 节流，间隔n执行一次
const throttle = (fn, delay) => {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, delay);
  };
};
// 实现柯里化
const curry =(fn,...args)=>{
    return ()
}

/**
 * TODO: 今天要做的笔记
 * 
 * 1. 柯里化
 * 2. 图片懒加载 https://leetcode.cn/leetbook/read/interview-coding-frontend/dqhju7/
 * 3. 手写 bind,apply,call https://leetcode.cn/leetbook/read/interview-coding-frontend/dqxyi5/
 * 4. 手写 new
 * 5. promise 一些常用方法，以及并发池等算法
 * 6. 时间复杂度：https://leetcode.cn/leetbook/read/arithmetic-interview-cheat-sheet/0exlg2/
 * 7. 两个小测也过一遍吧
 * 8. 重点是性能优化，这个如何去讲，如何结合之前的项目！！
 */
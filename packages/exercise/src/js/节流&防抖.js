// 防抖
function debounce(fn, t = 300) {
  let timer;
  return function (...arg) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...arg);
    }, t);
  };
}

// 节流
function throttle(fn, t) {
  let lastTime = Date.now();
  return function () {
    let nowTime = Date.now();
    const diff = nowTime - lastTime;
    if (diff > t) {
      fn(...arg);
      lastTime = nowTime;
    }
  };
}
// 柯里化
function curry(fn) {
  return function (...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...nextArgs) => curry(...args, ...nextArgs);
    }
  };
}

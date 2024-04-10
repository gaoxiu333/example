// 斐波那契
const fibGenerator = function* () {
    let pre = 0, cur = 1
    yield pre
    yield cur
    while (true) {
        yield pre + cur;
        [pre, cur] = [cur, pre + cur]
    }
}
let gen = fibGenerator()

// 手写 call 经典写法
Function.prototype.callPolyfill = function (content, ...args) {
    content ||= window
    content.fn = this
    const result = content.fn(...args)
    delete content.fn
    return result
}
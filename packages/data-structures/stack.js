/**
 * 堆
 * 特征：先进先出
 * ref: https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/stack/Stack.js
 */
class Stack {
    constructor() {
        this.stack = []
    }
    // 是否为空
    isEmpty() {
        return this.stack.length === 0
    }
    // 查看第一个
    peek() {
        return this.stack.at(-1)
    }
    // 添加
    push(val) {
        this.stack.push(val)
    }
    // 删除
    pop() {
        if (this.isEmpty()) return null
        return this.stack.pop()
    }
    toArray() {
        return this.stack
    }
    toString() {
        this.stack.toString()
    }
}
const stack = new Stack()
const isEmpty = stack.isEmpty()
stack.push(1)
console.log(stack.isEmpty())
stack.pop()
stack.push(23)
console.log(stack.toArray())


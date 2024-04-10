/**
 * 使用JS实现堆栈
 * - 初始化
 * - 添加元素
 * - 删除元素
 * - 打印元素
 * - 是否为空
 * - 栈大小
 * - 返回栈顶元素
 * - 清空
 */

class Stack {
    constructor() {
        this.items = []
    }
    push(item) {
        this.items.push(item)
    }
    pop() {
        this.items.pop(item)
    }
    isEmpty() {
        return this.items.length === 0
    }
    size() {
        return this.items.length
    }
    print() {
        console.log(this.items.toString())
    }
    peek(){
        return this.items.at(-1)
    }
    
}

const stack = new Stack()
stack.push(1)
stack.push({a:2})
stack.print()
console.log('--',stack.peek())
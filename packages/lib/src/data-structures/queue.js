
/**
 * 队列
 * 特征：先进后出
 * ref: https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/queue/Queue.js
 */
class Queue {
    constructor() {
        this.queue = []
    }
    isEmpty() {
        return this.queue.length === 0
    }
    peek() {
        return this.queue.at(1)
    }
    enqueue(val) {
        this.queue.push(val)
    }
    dequeue() {
        if (this.isEmpty()) return null
        return this.queue.shift()
    }
    toString() {
        return this.queue.toString()
    }
}
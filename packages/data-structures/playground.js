/**
 * 链表
 * 1. 定义链表元素
 * 2.定义链表
 *  - prepend 
 * - append
 * - insert
 * - find
 * - delete
 * - delatedHead
 * - fromArray
 * - toArray
 * - toString
 * - reverse
 */

class LinkedListNode {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
    toString() {
        return `$${this.value}`
    }
}

// 定义链表
class LinkedList {
    constructor() {
        this.head = null
    }
    prepend(value) {
        const nodes = new LinkedListNode(value, this.head)
        this.head = nodes
        return nodes
    }
    append(value) {
        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        const nodes = new LinkedListNode(value)
        currentNode.next = nodes
        return nodes
    }
    insert(value, rawIndex) {
        rawIndex = Math.max(0, rawIndex)
        let count = 0
        let currentNode = this.head
        while (currentNode?.next) {
            if (count === rawIndex) break
            count += 1
            currentNode = currentNode.next
        }
        const nodes = new LinkedListNode(value, currentNode?.next || null)
        currentNode.next = nodes
        return nodes
    }
    find(value) {
        const currentNode = this.head
        while (currentNode) {
            if (value === currentNode.value) {
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }
    delete(value) {
        if (!this.head) return null
        const currentNode = this.head
        const deleteNode = null
        while (currentNode.next) {
            if (value === currentNode?.next.vlaue) {
                deleteNode = currentNode.next
                currentNode.next = currentNode.next.next
                break
            }
        }
        return deleteNode
    }
    deleteHead() {
        if (!this.head) return null
        const deleteNode = this.head
        this.head = deleteNode.next
        return deleteNode
    }
    fromArray(values) {
        values.forEach(value => this.append(value))
    }
    toArray() {
        const nodes = []
        const currentNode = this.head
        while (currentNode) {
            nodes.push(currentNode.value)
            currentNode = currentNode.next
        }
        return nodes
    }
    reverse() {
        let currentNode = this.head
        let newNode = null
        let oldNode = null
        while (currentNode) {
            oldNode = currentNode.next
            currentNode.next = newNode

            newNode = currentNode
            currentNode = oldNode
        }
    }
}
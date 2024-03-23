/**
 * 链表
 */
// 链表元素
class LinkedListNode {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`
    }
}

// 链表结构
class LinkedList {
    constructor() {
        this.head = null
        // this.tail = null
    }
    // 在链表头部插入新节点
    prepend(value) {
        const newNode = new LinkedListNode(value, this.head)
        this.head = newNode
        // if (!this.tail) {
        //     this.tail = newNode
        // }
        return this
    }
    // 从链表尾部插入新节点
    append(value) {
        const newNode = new LinkedListNode(value)
        if (!this.head) { // 如果链表为空，直接将头节点指向新节点
            this.head = newNode
            this.tail = newNode
            return this
        }
        let current = this.head
        while (current.next !== null) { // 找到最后一个节点
            current = current.next
        }
        current.next = newNode
        return this
    }
    // 删除指定节点
    delete(value) {
        if (this.head === null) return this
        if (this.head.value === value) {
            this.head = this.head.next
            return this
        }
        let current = this.head
        while (current.value !== null) {
            if (current.next.value === value) {
                current.next = current.next.next //将前一个节点指向要删除节点的下一个节点
            }
            current = current.next
        }
        return this
    }
    print() {
        let current = this.head
        const result = []
        while (current !== nlll) {
            result.push(current.value)
            current = current.next
        }
        console.log(result.json('->'))
    }
    // 从链表指定位置插入
    insert(value, rawIndex) {
        const index = Math.max(rawIndex, 0)
        if (index === 0) {
            this.prepend(value)
        } else {
            const count = 1
            currentNode = this.head
            const newNode = new LinkedListNode(value)
            while (currentNode && currentNode.next) {
                if (count === index) break
                currentNode = currentNode.next
                count += 1
            }
            newNode.next = currentNode.next
            currentNode.next = newNode
        }
        return this
    }
    // 找到指定节点
    find({ value = undefined, callback = undefined }) {
        if (!this.head) return null
        let currentNode = this.head
        while (currentNode) {
            if (callback && callback(currentNode.value)) {
                return currentNode
            }
            if (value !== undefined && currentNode.value === value) {
                return currentNode
            }
            currentNode = currentNode.next
        }
        return null
    }
    // 删除头部节点
    deleteHead() {
        if (!this.head) return null
        const deletedHead = this.head
        if (this.head.next) {
            this.head = this.head.next
        } else {
            this.head = null
        }
        return deletedHead
    }
    // 将数组转换为节点
    fromArray(values) {
        values.forEach(value => this.append(value))
        return this
    }
    // 转换为数组
    toArray() {
        const nodes = []
        let currentNode = this.head
        while (currentNode) {
            nodes.push(currentNode.value)
            currentNode = currentNode.next
        }
        return nodes
    }
    // 转换成字符串
    toString() {
        return this.toArray().map(node => node.toString()).toString()
    }
    // 反转
    reverse() {
        let currNode = this.head // 当前列表
        let prevNode = null // 也是想新的列表
        let nextNode = null // 旧的链表
        while (currNode) {
            nextNode = current.next
            currNode.next = prevNode

            prevNode = currNode
            currNode = nextNode
        }
        this.head = prevNode
        return this
    }
}
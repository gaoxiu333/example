/**
 * tree 数据结构
 */

/**
 * 二叉树
 */
class BinaryTreeNode {
    constructor(value = null) {
        this.left = null
        this.right = null
        this.parent = null
        this.value = value
    }
    get leftHeight() {
        if (!this.left) return 0
        return this.left.height + 1
    }
    get height() {
        return Math.max(this.leftHeight, this.rightHeight)
    }

    get balanceFactor() {
        return this.leftHeight - this.rightHeight
    }
    get uncle() {
        if (!this.parent) return undefined
        if (!this.parent.parent) return undefined
        if (!this.parent.parent.left || !this.parent.parent.right) return undefined
        // 。。。 没看懂
    }
    setValue(value) {
        this.value = value
        return this
    }
    setLeft(node) {
        if (this.left) {
            this.left.parent = null
        }
        this.left = node
        if (this.left) {
            this.left.parent = this
        }
        return this
    }
    setRight(){}
    // ... 暂时放弃
}
/**
 * LRU Cache 
 * 最少最少使用缓存
 */

class LRUCacheOnMap {
    constructor(capacity) {
        this.capacity = capacity
        this.items = new Map()
    }

    get(key) {
        if (!this.items.has(key)) return undefined
        const val = this.items.get(key)
        this.items.delete(key)
        this.items.set(key, val)
        return val
    }
    set(key, val) {
        this.items.delete(key)
        this.items.set(key, val)
        if (this.items.size > capacity) {
            for (const headKey of this.items.keys()) {
                this.items.delete(headKey)
                break
            }
        }
    }
}
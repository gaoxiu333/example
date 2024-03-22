class Dep {
    constructor() {
        this.sub = []
    }
    addSub(sub) {
        this.subs.push(sub)
    }
    removedSub(sub) {
        remove(sub)
    }
    notify() {
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }

}
function remove(arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item)
        if (~index) {
            return arr.splice(index, 1)
        }
    }
}

class Watch {
    constructor(vm, expOrFN, cb, options) {
        this.cb = cb
        this.vm = vm
        Dep.target = this
        this.cb.call(this.vm)
    }
    update() {
        this.cb.call(this.vm)
    }
}



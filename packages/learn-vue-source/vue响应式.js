// 数据响应式

// 响应式绑定
function obsever(value, cb) {
    Object.keys(value).forEach(key => defineReactive(value, key, value[key], cb))
}
function defineReactive(obj, key, value, cb) {
    const dep = new Dep()
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            // 依赖收集
            if (Dep.target) {
                dep.addSub(Dep.target)
            }
            return value
        },
        set(val) {
            // 订阅者收到消息后的回调
            cb()
            dep.notify()
            value = val
        }
    })
}

// 依赖收集
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




// Vue 实例

class Vue {
    constructor(options) {
        this._data = options.data
        obsever(this._data, options.render)
        _proxy.call(this, options.data)
        let watcher = new Watcher(this)
        console.log('constructor')
    }
    setText(val) {
        this.text = val
    }
}
let app = new Vue({
    el: '#app',
    data: {
        text: '123',
        text2: '3321'
    },
    render() {
        console.log('render')
    }
})

// 代理 将_data代理到data上，通过操作data，触发_data的
function _proxy(data) {
    const that = this
    Object.keys(data).forEach(key => {
        Object.defineProperty(that, key, {
            enumerable: true,
            configurable: true,
            get() {
                return that._data[key]
            },
            set(newVal) {
                that._data[key] = newVal
            }
        })
    })
}
console.log('start')
app.setText(2)
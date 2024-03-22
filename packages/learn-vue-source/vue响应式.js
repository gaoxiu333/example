// 数据响应式

// 响应式绑定
function obsever(value, cb) {
    Object.keys(value).forEach(key => defineReactive(value, key, value[key], cb))
}
function defineReactive(obj, key, value, cb) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get() {
            // 依赖收集
            return value
        },
        set(val) {
            // 订阅者收到消息后的回调
            cb()
            value = val
        }
    })
}

// Vue 实例

class Vue {
    constructor(options) {
        this._data = options.data
        obsever(this._data, options.render)
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

// 代理 将_data代理到data上，通过操作data，触发_data的响应式
function _proxy(data) {
    const that = this
    Object.keys(data, key => {
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
// @ts-nocheck

// 将data变成可观察的

function obserce(value, cb) {
  Object.keys(value).forEach(key => defineReactive(value, key, value[key], cb))
}

function defineReactive(obj, key, val, cb) {
  Object.defineProperty(obj, key, {
    enmuerable: true,
    configurable: true,
    get: () => {
      return val
    },
    set: newVal => {
      val = newVal
      cb()
    }
  })
}

function _proxy(data) {
  const that = this
  Object.keys(data).forEach(key => {
    Object.defineProperty(that, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter() {
        return this._data[key]
      },
      set: function proxySetter(value) {
        that._data[key] = value
      }
    })
  })
}

class Vue {
  constructor(options) {
    this._data = options.data
    _proxy.call(this, options.data)
    obserce(this._data, options.render)
  }
}

export { Vue }
console.log('我是index模块', requirejs)

// 加载 module_a

requirejs(['module_a'], function (module) {
    console.log('module_a', module)
    module.color = 1
})

requirejs(['module_a'], function (module) {
    console.log('module_a', module)
})

console.log(require === requirejs)
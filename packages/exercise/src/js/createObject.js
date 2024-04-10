/**
 * js创建对象的几种方式，js对象的特点，基于原型的继承
 * 1. 可能是基于原生方法创建
 * 2. 也有可能为了继承，需要一些额外手段
 */

// 先说创建！
// 1. 对象初始化器/字面量
let obj1 = { a: 1 }
// 2. 构造函数
function Foo() {
    this.name = 'aa'
}
let obj2 = new Foo()
//3. Object.create// 可以指定原型，或者null没有原型
let obj3 = Object.create(Foo)

/**
 * 继承
 */
const objPro = {
    a: 1,
    __proto__: {
        c: 1
    }
}
console.log(obj1,objPro)
const objPro2 = Object.create(null)

// 对象遍历
// for in 可枚举

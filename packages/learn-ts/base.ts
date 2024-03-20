// 类型别名
type TypeName = string | number

// 泛型

// 类型别名中的泛型
type Container<T> = { value: T }
// 接口中的泛型
interface GenericIdentityFn<T> {
    (arg: T): T
}

// 函数泛型
function identity<Type>(arg: Type): Type {
    return arg
}

// 类泛型
class GenericNumber<T>{
    zeroValue!: T;
    add!: (x: T, y: T) => T;
}

// 泛型默认值
type MyGenericType<T = string> = {
    value: T
}

// 泛型约束
type ResStatus<ResCode extends number = 1000> = ResCode extends 1000 | 1001 | 10002 ? "success" : 'failure'

// 索引类型
/**
 * 索引类型查询
 * 索引类型访问
 * 索引签名类型
 */
// 索引签名类型：
type AnyObjType = {
    [key: string]: any
}
type Foo = {
    a: string,
    b: boolean
}
// 索引类型查询 通常配合keyof，返回对象属性的字面量的联合类型
type Keys = keyof Foo
let a: Keys = 'a'

// 索引类型访问 通过索引来访问属性值的类型
type PropType = Foo[keyof Foo]
type ItemType = Foo['b']

// 映射类型
interface Person {
    name: string
    age: number
}
// keyof 返回所有属性名的联合类型
// in 遍历循环联合类型
type Optional<T> = {
    [K in keyof T]?: T[K]
}


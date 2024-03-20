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


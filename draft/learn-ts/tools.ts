

// ===================== 属性修饰
// 可选（深度）
export type DeepPartial<T extends object> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

// 剔除 null ｜ undefined
type NonNullable<T> = T extends null | undefined ? never : T

type DeepNonNullable<T extends object> = {
    [K in keyof T]: T[K] extends object ? DeepNonNullable<T[K]> : NonNullable<T[K]>
}

// 这里有值，但是为null
type Nullable<T> = T | null
type DeepNullable<T extends object> = {
    [K in keyof T]: T[K] extends object ? Nullable<T[K]> : Nullable<T[K]>
}


// 部分属性可选
export type MarkPropsAsOptional<T extends object, K extends keyof T = keyof T> = Partial<Pick<T, K>> & Omit<T, K>

// 展开 - 将嵌套对象扁平化为单层对象
type Flatten<T> = {
    [K in keyof T]: T[K] extends object ? Flatten<T[K]> : T[K]
} & {}

// =============== 结构工具类型
/**
 * 1. 基于键值类型的 Pick 与 Omit
 * 2. 子结构的互斥处理
 */

// 定义一个函数类型
type FuncStruct = (...args: any[]) => any
// 找出所有属性类型是函数的属性，并且将有效属性名包装成一个联合类型
// type FunctionKeys<T extends object> = {
//     [K in keyof T]: T[K] extends FuncStruct ? K : never
// }[keyof T]

type ExpectedPropKeys<T extends object, ValueType> = {
    [Key in keyof T]-?: T[Key] extends ValueType ? Key : never
}[keyof T]

type FunctionKeys<T extends object> = ExpectedPropKeys<T, FuncStruct>
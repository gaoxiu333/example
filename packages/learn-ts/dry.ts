interface A { a: number }
interface B { b: string }

type C = A & B; // C 类型包含属性 a 和属性 b
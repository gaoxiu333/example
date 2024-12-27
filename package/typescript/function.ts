// 声明函数

// 函数表达式
function greeter(fn: (a: string) => void) {
  fn("hello");
}
function printToConsole(s: string) {
  console.log(s);
}
greeter(printToConsole);

/**
 * 语法
 * （a:string) => void
 *  表示具有一个参数的函数
 *  没有返回值
 */

// 使用 type
type GreetFunction = (a: string) => void;
function greeter1(fn: GreetFunction) {
  fn("hello");
}

// 定义函数的静态属性
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description, fn(5));
}
function myFunc(someArg: number) {
  return someArg > 3;
}
myFunc.description = "myFunc";
doSomething(myFunc);

// 使用 new 操作符
type SomeConstructor = {
  (n?: number): string;
  new (s: string): any;
};
function fnCtor(ctor: SomeConstructor) {
  return new ctor("hello");
}

function fnCtor1(ctor: SomeConstructor) {
  console.log(ctor(1));
  console.log(new ctor("hello")); // 那就不能使用数字了
}

// 函数中使用泛型
function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
const s = firstElement(["a", "b", "c"]);
const n = firstElement([1, 2, 3]);

// 推理
function map<Input, Output>(
  arr: Input[],
  fn: (item: Input) => Output
): Output[] {
  return arr.map(fn);
}
const parsed = map(["1", "2", "3"], parseInt);
// or const parsed = map<string, number>(["1", "2", "3"], parseInt);

// 条件约束 extends
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}
const longerArray = longest([1, 2], [1, 2, 3]);
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const a1 = firstElement1([1, 2, 3]);
// b: any (bad)
const b2 = firstElement2([1, 2, 3]);

/**
 * 函数重载
 * 重载签名和实现签名
 */

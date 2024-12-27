// ================================================================================
// ------------------------ interface:用来描述对象的形状------------------------------
// ================================================================================
/**
 * 定义对象类型
 * 用来描述对象的属性和类型
 */
interface User {
  id: number;
  name: string;
  isActive: boolean;
}
const user: User = {
  id: 1,
  name: "Tom",
  isActive: true,
};

/**
 * 定义函数类型
 * 描述函数的参数和返回值的类型
 */
interface Add {
  (a: number, b: number): number;
}
const add: Add = (a, b) => a + b;

/**
 * 描述类的结构
 * 为类定义一个"契约"，约束类需要实现的属性和方法
 */

interface Animal {
  name: string;
  makeSound(): void;
}
class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log(this.name, "bark");
  }
}

/**
 * 特性：
 * 1. 只读属性
 * 2. 索引签名
 * 3. 可选属性
 * 4. 重载
 */
interface FullUser {
  readonly _id?: number; // 只读 ｜ 可选
  [key: string]: any; // 索引签名
  updateName(name: string): void;
  updateName(name: string, age: number): void; // 重载
  (): void; // ??
}

/**
 * extends
 * 继承
 * 注意：也可以通过合并相同名字的接口来实现继承/拓展
 */
interface Animal {
  name: string;
}
interface Dog extends Animal {
  age: number;
}
const dog: Dog = {
  name: "dog", // 父类属性
  makeSound: () => {}, // 父类方法
  age: 1,
};

/**
 * 完整示例
 */

type JSONResponse = {
  version: number;

  payloadSize: number;
  outOfStock?: boolean;
  update: (retryTimes: number) => void;
  // update(retryTimes:number):void
  (): JSONResponse; // 表示  JSONResponse 是一个构造函数
  new (s: string): JSONResponse;
  readonly body: string;
};

/**
 * 联合类型
 */
type Size = "small" | "medium" | "large" | "extra large";

/**
 * 从值派生类型
 * typeof
 */
const data = { x: 10, y: 20 };
type Data = typeof data;

/**
 * 从函数返回值派生类型
 * ReturnType + typeof
 */
function createFixtures() {
  return { id: 1, name: "example" };
}
type Fixtures = ReturnType<typeof createFixtures>;

/**
 * 交叉类型
 * &
 */
type Point = { x: number } & { y: number };
const point: Point = { x: 10, y: 20 };

/**
 * 条件类型
 * TODO: 不懂
 */
type HasFourLegs<Animal> = Animal extends { legs: 4 } ? Animal : never;
type Animals = Bird | Dog | Ant | Wolf;
type FourLegs = HasFourLegs<Animals>; // Dog | Wolf

/**
 * 模版字符串
 */
type SupportedLangs = "en" | "pt" | "zh";
type FooterLocaleIDs = "header" | "footer";
type AllLocaleIDs = `${SupportedLangs}_${FooterLocaleIDs}`;

/**
 * 映射类型
 */
type Subscriber<Type> = {
  [Property in keyof Type]: (newValue: Type[Property]) => void;
};
type Artist = { name: string; bio: string };
type ArtistSub = Subscriber<Artist>;

/**
 * 通过类型遍历
 */

type Data1 = [location: Point, timestamp: string];
type Point = { x: number; y: number };
/**
 * 类型别名多次声明
 */

type A = { x: number } & { y: number };
let a: A = { x: 1, y: 2 };

type B = keyof { a: 1; b: 2 };
type C = typeof a;

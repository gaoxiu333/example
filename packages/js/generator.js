console.log("=======generatior start=======");
function* fn(a) {
  let cc = yield "hello" + a;
  yield "world" + cc;
  return "end";
}
const hw = fn("---");
console.log("hw", hw);
for (let v of fn(1)) {
  console.log(v);
}
function* foo() {
  yield "hello";
  yield "world";
  return "end";
}
function* bar() {
  yield "x";
  yield* foo()
  yield 'y'
}
let fn1 = bar()
console.log(fn1.next())
console.log(fn1.next())
console.log(fn1.next())
console.log(fn1.next())
console.log(fn1.next())
console.log(fn1.next())


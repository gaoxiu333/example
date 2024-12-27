// class extends 多个 & 交叉类型 或者说是 interface 的

interface Box {
  content: unknown;
}
interface Box1 {
  name: string;
}
interface Box3 extends Box, Box1 {
  ages: number;
}
const box2:Box3 = {
  content: "hello",
  name: "hello",
  ages: 1
}

type Box2 = Box & Box1

const box3:Box2 = {
  content: "hello",
  name: "hello",
}

let box1: Box = {
  content: "hello",
};

if (typeof box1.content === "string") {
  box1.content.toUpperCase();
}

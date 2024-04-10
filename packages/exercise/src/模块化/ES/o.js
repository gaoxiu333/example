let num = 0;
let obj = {
  num: 0
}
function getNum() {
  return num;
}
function setNum(n) {
  obj.num += 100
  num = n;
}
console.log('o init');
export {
  num,
  getNum,
  setNum,
  obj
}
let num = 0;
function getNum() {
  return num;
}
function setNum(n) {
  num = n;
}
console.log('o init');
module.exports = {
  num,
  getNum,
  setNum,
}
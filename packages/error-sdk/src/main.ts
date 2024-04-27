export const add = (a: number, b: number) => a + b;
export const sub = (a: number, b: number) => a - b;
window.addEventListener('error', (e) => console.log('error', e));
console.log('hello world!');

console.log('navigator', navigator.sendBeacon('hello', 'world'));
const { userAgent, language } = navigator;
const { title } = document;
const { href } = location;
console.log({ userAgent, language, title, href });
// a =1


// 创建一个图片
const img = document.createElement('img');
img.src = 'https://vsssg';
document.body.appendChild(img);


document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'hidden') {
    // 页面不可见时执行的操作
    console.log('页面不可见');
  } else {
    // 页面可见时执行的操作
    console.log('页面可见');
  }
});

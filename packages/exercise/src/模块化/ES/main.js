import { num, getNum, setNum,obj } from './o.js';
import { aNum } from './a.js';
import { bNum } from './b.js';

console.log('o.num:', num);
setNum(1);

console.log('o.num:', num);
console.log('o.getNum:', getNum());
console.log('module', aNum, bNum)
console.log(obj)
var fs = require('fs');
let b = fs.readFileSync('16');
let str = b.toString();
let l = str.split('\n\n');
let t = l[2].split('\n').slice(1).map(tile => tile.split(','))
console.log(t);
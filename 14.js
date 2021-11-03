var fs = require('fs');
let b = fs.readFileSync('14');
let str = b.toString();
let l = str.split('\n');

let ops = l.map(line => line.split(' '))
let and, or = 0;
let keys = {};
ops.forEach(op => {
    // current and
    if (op[0] == 'mask') {
        all(op[2]);
        and = BigInt(`0b${op[2]}`.replace(/X/g, '1'))
        // current or
        or = BigInt(`0b${op[2]}`.replace(/X/g, '0'))
        console.log(and, or);
    } else {
        let key = op[0];
        let value = BigInt(op[2]);
        console.log(key, keys[key] = value & and | or);
    }
})

console.log(Object.values(keys).reduce((a,e) => a+e, BigInt(0)));

function all(str) {
    let is = []
    str.split('').reverse().forEach((x,i) => {
        if (x == 'X') {
            // note the i
           is.push(i);
        }
    })
    console.log(is);
}
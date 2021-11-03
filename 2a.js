fs = require('fs');

let buffer = fs.readFileSync('input')
let string = buffer.toString();
let parts = string.split('\n');

console.log(parts)
let i = 0;
parts.forEach(part => {
    if (!part) return;
    let [n, l, p] = part.split(' ')
    let [a, b] = n.split('-');
    console.log(l);
    l = l[0];

    let length = p.match(new RegExp(l, 'g'))?.length
    let x = p[a-1];
    let y = p[b-1];
    if ((x == l && y != l) || (y == l && x != l)) {
        i++;
    }
    // console.log(a,b,l, length, p);
    // if (length && a <= length && length <= b) {
    //     console.log(true);
    //     i++;
    // }
})
console.log(i);


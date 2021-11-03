var fs = require('fs');
let b = fs.readFileSync('18');
let s = b.toString();
let l = s.split('\n');
l.forEach(r => {
    let line = r.split(' ');
    let rpn = [];
    while (x = line.splice(0, 1)) {
        rpn.push(x)
        console.log(rpn);
    }
    console.log(rpn);
})
var fs = require('fs');
let b = fs.readFileSync('17');
let s = b.toString();
let l = s.split('\n');
let slice = [l.map(line => line.split(''))]
let a = slice;
let bobs = {};
slice[0].forEach((row,i) => row.forEach((quark,j) => quark == '#' ? bobs[`${i},${j},0`] = true : ''))
let carl ={...bobs}
Object.keys(bobs).forEach(bob => {
    let [x,y,z] = bob.split(',');
    let keys =  
})
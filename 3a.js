fs = require('fs');

let buffer = fs.readFileSync('3inpit');
let string = buffer.toString();
let parts = string.split('\n').map(part => part.split(''))
let vars = [1,3,5,7];
let ans = [];

function t(inc, jnc) {

    let trees = 0;
    let j = jnc;
    for (let i = inc; i < parts.length; i+= inc) {
        if (!parts[i].length) continue;
        if (parts[i][j] == '#') trees++;
        j = (j + jnc) % (parts[i].length);
    }
    return trees;
}
for (let inc of vars) {
    let trees = t(1, inc);
   ans.push(trees);
}
ans.push(t(2,1));
console.log(ans);
console.log(ans.reduce((a,e) => e*a, 1));
// 162

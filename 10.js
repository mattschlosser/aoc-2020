var fs = require('fs');
// large number library because javascript
var Big = require('big.js');
let b = fs.readFileSync('10');
let s = b.toString();
let l = s.split('\n').map(Number);
l.sort((a,b) => a < b ? -1 : a > b ? 1 : 0);
let diffs = {1: 0, 2: 0, 3: 0}
// keep track of a count of each joltage?
let joltages = {[l[0]]: 1};
for (let i = 1; i < l.length; i++) {
    let diff = l[i] - l[i-1];
    joltages[l[i]] = joltages[l[i]] ? joltages[l[i]]++ : 1;
    diffs[diff]++;
}

console.log((diffs[1]+1) * (diffs[3]+1));
// how many different ways are there to get to the next adapter?
// count
const w = [Big(0), Big(1),Big(2),Big(4)];
function ways(n) {
    // now we just need an if statement
    // to see if we can include that next 
    // if this joltage does not exist, there are ZERO ways
    // to do this
    if (!joltages[n]) {
        w[n] = Big(0);
        return;
    } if (n < 4) {
        // we already have these precomputed
        return;
    }
    w[n] = w[n-1].plus(w[n-2]).plus(w[n-3]);
}
// now we just GO!
for (let i = 1; i <= l[l.length-1]; i++) {
    ways(i);
}
// print the largest number
console.log(w[l[l.length-1]].c.join(''));
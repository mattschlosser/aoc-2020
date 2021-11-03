var fs = require('fs');
let b = fs.readFileSync('6');
let s = b.toString();
let l = s.split('\n\n');
let k = l.map(k => k.split('\n'))

function intersection(setA, setB) {
    let _intersection = new Set()
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem)
        }
    }
    return _intersection
}
let n = k.reduce((a,e) => {
    let masterSet = null;
    e.forEach(i => {
        if (masterSet == null) {
            masterSet = new Set(i.split(''));
        } else {
            masterSet = intersection(masterSet, new Set(i.split('')))
        }
    })
    return a + masterSet.size
}, 0)
console.log(n);
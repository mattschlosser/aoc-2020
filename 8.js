var fs = require('fs');
let b = fs.readFileSync('8');
let s = b.toString();
let l = s.split('\n');
// l.forEach(console.log)
let i;
function fn() {
    i = 0;
    let visited = Array(l.length).fill(0);
    for (let line = 0; line < l.length; line++) {
        let [c, n] = l[line].split(' ')
        if (visited[line]) {
            return false;
        }
        visited[line] = 1;
        if (c == 'acc') {
            i += Number(n);
        } else if (c == 'jmp') {
            line += Number(n)
            line--; // undo whatever the natural instruction is
        }
    }
    return true;
}

function convert(i) {
    let [c, n] = l[i].split(' ');
    c = c == 'jmp' ? 'nop' : c == 'nop' ? 'jmp' : 'acc'
    l[i] = `${c} ${n}`
    return `${c} ${n}`
}

l.forEach((line, j) => {
    // console.log('original', l[j]);
    // console.log('in', convert(j))
    convert(j);
    if (fn()) console.log(i)
    convert(j);
    // console.log('out', convert(j))
})

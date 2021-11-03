var fs = require('fs');
let b = fs.readFileSync('9');
let s = b.toString();
let l = s.split('\n');
let queue = [];
let i;
for (i = 0; i < 25; i++) {
    queue.push(l[i])
}
// console.log(queue);
let ans;
while (i < l.length) {
    next = l[i];
    // console.log(next);
    let found = false;
    for (let j = 0; j < 25; j++) {
        // we need to 
        let r = next - queue[j];
        // console.log(next, queue, r, j, l[i]);
        if ((queue.find(e => e == r))) {
            found = true
        }
    }
    if (!found) {
        console.log(next);
        ans = next;
        break;
        // return
    }
    queue.push(l[i])
    queue.splice(0, 1);
    i++;
}

let goal = 0;
let head = 0; 
let tail;
for (tail = 0; tail < l.length; ) {
    while (goal < ans && tail < l.length) {
        goal += Number(l[tail++])
        // console.log(ans, goal);
    }
    while (goal > ans && head < tail) {
        goal -= Number(l[head++])
        // console.log(ans, goal);
    }
    if (goal == ans) {
        // console.log(l[head], l[tail-1], Number(l[head]) + Number(l[tail-1]))
        let k = []
        for (let i = head; i < tail; i++) {
            k.push(Number(l[i]));
            // console.log(Number(l[i]))
        }
        k.sort((a,b) => a < b ? -1 : a > b ? 1 : 0);
        console.log(k[0]+k[k.length-1])
        return;
    }
}
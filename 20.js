var fs = require('fs');
let b = fs.readFileSync('20');
let str = b.toString();
let l = str.split('\n\n');
let t = l.map(tile => tile.split('\n'))
let tiles = {};
let edges = {};
t.forEach(tile => {
    let n = tile[0].split(' ')[1].split(':')[0];
    tiles[n] = {
        north: tile.slice(1,2).join(''), 
        east: tile.slice(1).map(e => e[e.length-1]).join(''),
        west: tile.slice(1).map(e => e[0]).join(''),
        south: tile.slice(tile.length-1).join(''),
        n
    }
    let dirs = ['south', 'north', 'east', 'west'];
    dirs.forEach(dir => {
        let key = tiles[n][dir];
        if (edges[key]) {
            edges[key].push(n)
        } else {
            edges[key] = [n]
        }
        key = key.split('').reverse().join('')

        if (edges[key]) {
            edges[key].push(n)
        } else {
            edges[key] = [n]
        }
    })
})

console.log(edges);
Object.values(tiles).forEach(tile => {
    let key = tile.east;
    console.log()
})
let candidates = Object.keys(edges).filter(key => edges[key].length <= 1);
let i = candidates.reduce((a,e) => {
    let n = edges[e][0];
    if (a[n]) {
        a[n] += 1
    } else {
        a[n] = 1;
    }
    return a;
}, {})
console.log(i)
let x = Object.keys(i).filter(e => i[e] > 2);
console.log(x.reduce((a,e) => a*e, 1));
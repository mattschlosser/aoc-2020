const { timeStamp } = require('console');
var fs = require('fs');
let b = fs.readFileSync('13');
let str = b.toString();
let l = str.split('\n');
console.log(l);
let east = 0;
let south = 0;
let e = 1;
let s = 0;
l.forEach(dir => {
    let [d,n] = [dir.slice(0,1), Number(dir.slice(1))];
    console.log(d,n);
    if (d == 'E') {
        east += n;
    } 
    if (d == 'S') {
        south += n;
    }
    if (d == 'N') {
        south -= n;
    }
    if (d == 'W') {
        east -= n;
    }
    if (d == 'R') {
        let ns = n / 90;
        while (ns--) {
            if (e == 1) {
                e = 0; s = 1;
            }
            else if (s == 1) {
                e = -1; s = 0;
            }
            else if (e == -1) {
                e = 0; s = -1;
            }
            else if (s == -1) {
                s = 0; e = 1;
            }
        }
    }
    if (d == 'L') {
        let ns = n / 90;
        while (ns--) {
            if (e == 1) {
                e = 0; s = -1;
            }
            else if (s == -1) {
                e = -1; s = 0;
            }
            else if (e == -1) {
                e = 0; s = 1;
            }
            else if (s == 1) {
                s = 0; e = 1;
            }
        }
    }   
    if (d == 'F') {
        east += e * n;
        south += s * n;
    }
});

console.log(east + south);
east = 10;
south = -1;
ship_east = 0;
ship_south = 0;

l.forEach(dir => {
    let [d,n] = [dir.slice(0,1), Number(dir.slice(1))];
    console.log(d,n);
    if (d == 'E') {
        east += n;
    } 
    if (d == 'S') {
        south += n;
    }
    if (d == 'N') {
        south -= n;
    }
    if (d == 'W') {
        east -= n;
    }
    if (d == 'R') {
        let ns = n / 90;
        while (ns--) {
            // e is 10, s is -4
            let tmp = east;
            east = -south;
            south = tmp;
        }
    }
    if (d == 'L') {
        let ns = n / 90;
        while (ns--) {
            let tmp = south;
            south = -east;
            east = tmp;
        }
    }   
    if (d == 'F') {
        ship_east += east * n;
        ship_south += south * n;
    }
    console.log(ship_east, ship_south, east, south)
});
console.log(ship_east + ship_south)

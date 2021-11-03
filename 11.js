const { count } = require('console');
var fs = require('fs');
let b = fs.readFileSync('11');
let s = b.toString();
let l = s.split('\n');
let seats = l.map(line => line.split(''));
let clone = (arr) => arr.reduce((a,e) => {a.push([...e]); return a;}, []);
let orig = clone(seats);
let a = seats;
let aux = clone(seats);
function isThisSeatEmpty(a, x, y) {
    if (x >= 0 && x < a.length) {
        if (y >= 0 && y < a[x].length) {
            return a[x][y] != '#'
        }
    }
    return true;
}
function isThisSeatEmpty2(a, x, y, i, j) {
    if (x >= 0 && x < a.length) {
        if (y >= 0 && y < a[x].length) {
            if (a[x][y] == '.') {
                return isThisSeatEmpty2(a, x+i, y+j, i, j);
            } else {
                return a[x][y] != '#'
            }
        }
    }
    return true;
}
function adjacent(a,i,j) {
    let empty = true;
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            empty = empty && isThisSeatEmpty(a, i+x, j+y)
        }
    }
    return empty;
}
function adjacent2(a,i,j) {
    let empty = true;
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            empty = empty && ((i == 0 && j == 0) || isThisSeatEmpty2(a, i+x, j+y,x,y))
        }
    }
    return empty;
}
function tooCrowded(a, i, j){
    let countSeatsAround = 0;
    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            (!(x == 0 && y == 0)) && !isThisSeatEmpty(a, i+x, j+y) ? countSeatsAround++ : null
        }
    }
    return countSeatsAround >= 4;
}

function tooCrowded2(a, i, j) {
    let countSeatsAround = 0;

    for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
            (!(x == 0 && y == 0)) && !isThisSeatEmpty2(a, i+x, j+y, x, y) ? countSeatsAround++ : null;
        }
    }
    return countSeatsAround >= 5;
}
console.log(seats == a, seats == aux, a == aux);
function loop() {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] == 'L' && adjacent(a,i,j)) {
                aux[i][j] = '#'
            }
        }
    }
    // 
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] == '#' && tooCrowded(a,i,j)){
                aux[i][j] ='L'
            }
        }
    }
}
let eq = (a, b) => {
    let same = true;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            same = same && a[i][j] == b[i][j];
        }
    }
    return same;
}
function isNotEqualThenClone() {
    if (eq(a,aux)) {
        return false;
    }
    a = clone(aux)
    return true;
}
let r = 0;  

do {
    loop();
    r++;
    // if (r >= 5) break;
} while (isNotEqualThenClone())

let c  = 0;
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
        if (a[i][j] == '#') c++;
    }
}
console.log(c);
a = clone(orig);
function loop2() {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] == 'L' && adjacent2(a,i,j)) {
                aux[i][j] = '#'
            }
        }
    }
    // 
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] == '#' && tooCrowded2(a,i,j)){
                aux[i][j] ='L'
            }
        }
    }
}
do {
    loop2();
    r++;
    // if (r >= 5) break;
    // console.log(r);
} while (isNotEqualThenClone())

c  = 0;
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
        if (a[i][j] == '#') c++;
    }
}
console.log(c);
// loop();

// dad as a friend. 
// friendly, 
// 
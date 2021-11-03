var fs = require('fs');
let b = fs.readFileSync('12');
let s = b.toString();
let [l,buses] = s.split('\n');
console.log(l);
let full_list = buses.split(',')
buses = full_list.filter(e => e != 'x');


console.log(buses);
buses.forEach(bus => console.log(bus - l % bus, bus))
/**
 * at tiem 19, 
 * bus 5 has modulus 19 % 5 =  4
 * so 1 minute remains before it comes.
 */
console.log(6*647);
let t = 0;
lockstep_int = 0;
lockstep = 1;
while (!full_list.every((e,i, a) => {
    if (e == 'x' || ((t+i) % e == 0)) {
        if (i > lockstep_int && e != 'x') {
            lockstep_int = i;
            let s = 1;
            for (let r = 0; r < i; r++) {
                if (a[r] !='x') 
                    s = s * a[r]; // find the lcd (input's are all prime)
            }
            lockstep = s; // we can jump this lockstemp, because every element in the list worked
        }
        return true;
    } else {
        return false;
    }
})) {
    t += Number(lockstep);
}
console.log(t);

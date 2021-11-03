const fs = require('fs');

let buffer = fs.readFileSync('4');
let string = buffer.toString();
let passports = string.split('\n\n')
let i = 0;
function passes(keys, arr) {
    console.log(keys);
    let basic =  ['hcl', 'eyr', 'iyr', 'pid', 'byr', 'ecl', 'hgt'].reduce((a,e) => keys.findIndex(l => e == l) != -1 && a, true)
    if (!basic) return;
    hgt = arr['hgt'].slice(-2);
    h = Number(arr['hgt'].split('cm')[0].split('in')[0])
    arr['iyr'] = Number(arr['iyr'])
    arr['eyr'] = Number(arr['eyr'])
    arr['byr'] = Number(arr['byr'])
    console.log(hgt, h);
    return !isNaN(h) && arr['hcl'].match(/#[a-f0-9]{6}/)   &&
    arr['ecl'].match(/^(amb|blu|brn|gry|grn|hzl|oth)$/i) &&
    2010 <= arr['iyr'] && arr['iyr'] <= 2020 && 
    arr['pid'].match(/^[0-9]{9}$/) &&
    2020 <= arr['eyr'] && arr['eyr'] <= 2030 &&
    1920 <= arr['byr'] && arr['byr'] <= 2002 && 
   ((hgt == "cm" && 150 <= h && h <= 193) ||
    (hgt == "in" && 59 <= h && h <= 76) )

}
passports.forEach(passport => {
    let cleaned =  passport.split('\n').join(' ')
    let c = cleaned.split(' ').filter(e => e != '')
    console.log(c);
    let keys = c.map(e => e.split(':')[0])
    let arr = c.reduce((a,e) => {
        let x = e.split(':')
        a[x[0]] = x[1];
        return a
    }, {})
    if (passes(keys, arr)) {
        i++;
    }
})
console.log(i);
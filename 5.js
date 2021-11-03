	var fs = require('fs');

let buffer = fs.readFileSync('5input');

let s = buffer.toString()
let passes = s.split('\n')
let max = 0;
let seats = [];
passes.forEach(pass => {
  if (!pass) return;
  let r, c;
  let s = pass.split('').map(c => c.charCodeAt(0) & 0x4 ? 0 : 1).join('');
  console.log(pass, s, r = parseInt(s.slice(0, 7), 2), c= parseInt(s.slice(7), 2));
  seats.push(r*8+c);
  console.log(max = Math.max(max, r*8+c))
})
seats.sort((a,b) => a < b ? -1 : a > b ? 1 : 0);
let lastSeat = 100;
seats.forEach(seat => {
  seat != lastSeat + 1 ? console.log(seat) : ''
  lastSeat = seat;
})


seats.forEach(seat => console.log(seat))
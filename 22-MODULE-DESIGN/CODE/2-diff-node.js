const searchB = require('./3-cjs-searching');
const x = setTimeout(function exec() {
  console.log('completed timer');
}, 1000);
// in node env it prints the object of funciton
// in browser it prints undefined there is  different implementations

clearInterval(x);
// the program immediately turned off
// clearInterval takes the timeout object
// different way in the browser
// dont generalise it
console.log(searchB.linearSearch([2, 2, 4321], 3));

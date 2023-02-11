const m = require('npm-matematicas');
console.log(m);

console.log(m.suma(1, 2)); console.log(m.suma(1234, 2));

console.log(m.resta(11, 24)); console.log(m.resta(1, 2));

console.log(m.multiplicacion(2, 24));

console.log(m.division(50, 6));

var xorshift = require('xorshift');

for (var i = 0; i < 10; i++) {
    console.log(xorshift.random()); // number in range [0, 1)
  }
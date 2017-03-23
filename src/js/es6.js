let a = 2;
let b =5 ;

let hello = require('hello.js')

function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }
  console.log(a);
  return sum;
}

add(2, 5, 3) // 10
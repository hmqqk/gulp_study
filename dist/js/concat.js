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
function hello () {
	console.log('this is gulp-uglify')
}
hello()
var arr = {
	a: 12,
	fun: function () {
		console.log('eeee')
	}
}
//# sourceMappingURL=..maps/concat.js.map

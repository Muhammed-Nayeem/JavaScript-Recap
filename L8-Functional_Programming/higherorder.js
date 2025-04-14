/**
 * Higher-Order Function;
 * We can pass a function as an arguments;
 * We can return a function from another function;
 */

//Higher Order Function:
function add(a, b) {
  return a + b;
}

function manipulate(a, b, func) {
  var c = a + b;
  var d = a - b;

  // function multiply() {
  //   var m = func(a, b);
  //   return c * d * m;
  // }
  
  return function () {
    var m = func(a, b);
    return c * d * m;
  };
}

var result = manipulate(3, 4, add);
console.log(result());

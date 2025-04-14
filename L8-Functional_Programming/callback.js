//Callback is similar to the general function and it acts like higher-order function, pass a function as an arguments or return a function from another function all these work is doing by callback through more optimized way and also happened abstraction through callback; unnecessary functionality can be hidden from user and also given the access for user's necessary functionalities:

function sample(a, b, cb) {
  var c = a + b;
  var d = a - b;
  var result = cb(c, d);
  return result;
}

function sum(a, b) {
  return a + b;
}


var sumResult = sample(4, 5, sum);
console.log(sumResult);

var subResult = sample(4, 5, function(c, d) {
  return c - d;
});
console.log(subResult);

var mulResult = sample(4, 5, function(c, d) {
  return c * d;
});
console.log(mulResult);

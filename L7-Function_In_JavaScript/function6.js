//function expression:
var addition = function (a, b) {
  return a + b;
};

addition(10, 20);

setTimeout(function() {
  console.log("I will call after 5 second!");
}, 5000);

var add = addition;
console.log(add(10, 20));

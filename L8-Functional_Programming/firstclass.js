//First-Class Function:
function add(a, b) {
  return a + b;
}

//A function can be store in a variable:
var sum = add;
console.log(sum);
console.log(typeof sum);
console.log(sum(10, 20));

//A function can be store in an array:
var arr = [];
arr.push(add);
console.log(arr);
console.log(typeof arr[0]);
console.log(arr[0](30, 20));

//A function can be store in an object:
var obj = {
  sum: add,
};
console.log(obj);
console.log(typeof obj.sum);
console.log(obj.sum(60, 30));

//We can create a function as we need:
setTimeout(function() {
  console.log("I will call after 5 second!");
}, 5000);

//We can pass a function as an arguments:

//We can return a function from another function:
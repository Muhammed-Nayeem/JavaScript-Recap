//Comparing two object: it's not like string at all because of object are compared by their memory location;
var obj = {
  a: 10,
  b: 20,
  c: 30,
};
console.log(obj);

var obj2 = {
  a: 10,
  b: 20,
  c: 30,
};
console.log(obj2);

//Comparison:
// console.log(obj === obj2); //false - because of memory location;

// if (obj.a === obj2.a && obj.b === obj2.b && obj.c === obj2.c) {
//   console.log(true);
// } else {
//   console.log(false);
// }

console.log(JSON.stringify(obj) === JSON.stringify(obj2));

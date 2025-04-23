//var vs let vs const:

//var:
// var num = 10;
// num = 100;
// console.log(num);

// if (true) {
//   if (true) {
//     var num2 = 20;
//   }
// }
// console.log(num2);

//let:
// let num = 10;
// num = 100;
// console.log(num);

// if (true) {
//   let num2 = 20;
//   console.log(num2);
// }
// console.log(num2); //not accessible;

//const:
const num = 10;
num = num + 100;
console.log(num);

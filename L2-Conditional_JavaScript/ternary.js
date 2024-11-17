/**
 * Example 01: could vote or not using if else and ternary operator;
 * Example 02: variable value set up based on condition using nested if else and ternary operator;
 */

//Ex: 01
// var age = 16;

// if (age >= 18) {
//   console.log("You can vote!");
// } else {
//   console.log("You're not allow to vote!");
// }

//Using ternary operator:
// age >= 18 ? console.log("You can vote!") : console.log("You're not allow to vote!");

//EX: 02
var price = 1200;
var isLeader = true;

//simple ternary:
// price = !isLeader ? 0 : price + 100;

//semi-advance ternary:
price = !isLeader ? (price >= 1000 ? (price /= 2) : 0) : price + 1000;

console.log(price);

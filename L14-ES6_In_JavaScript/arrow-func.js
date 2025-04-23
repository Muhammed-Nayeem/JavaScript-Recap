//Arrow Function: ES6 features;

//function definition:
// function add(a, b) {
//   return a + b;
// }

//function expression:
// var sum = function(a, b) {
//   return a + b;
// }

//Arrow Function:
// let sum = (a, b) => {
//   return a + b;
// };
// console.log(sum(10, 20));

// let sub = (a, b) => a - b;
// console.log(sub(30, 10));

// let mul = x => x * x;
// console.log(mul());

let nums = [5, 2, 4, 1, 3, 6];

let getMinimumNum = (arr) => {
  let minNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }
  return minNum;
};
console.log(`Minimum number is: ${getMinimumNum(nums)}`);

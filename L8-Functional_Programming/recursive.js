// function print(n) {
//   if (n === 0) {
//     return;
//   } else {
//     console.log(n);
//     print(n -1);
//   }
// }

// print(10);

// function print(n) {
//   if (n === 0) {
//     return;
//   } else {
//     console.log("Hello! I'm calling.");
//     print(n - 1);
//   }
// }
// print(10);

function add(n) {
  if (n === 1) {
    return 1;
  }
  return n += add(n - 1);
}
console.log(add(10));

function fact(n) {
  if (n === 1) {
    return 1;
  }
  return n *= fact(n - 1);
}
console.log(fact(5));

var arr = [1, 2, 3, 4, 5];
function sumOfArray(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  }
  return arr[lastIndex] + sumOfArray(arr, lastIndex-1);
}
console.log(sumOfArray(arr, arr.length-1));
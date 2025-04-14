//reduce is a built in array method and special method of an array:
var num = [6, 7, 8, 1, -5, 2, 45, 9, 3, 4, 10, 5];

// var sum = num.reduce(function (prev, curr) {
//   return prev + curr;
// }, 0);
// console.log(sum);

// var maxNum = num.reduce(function (prev, curr) {
//   return Math.max(prev, curr);
// });
// console.log(maxNum);

// var minNum = num.reduce(function (prev, curr) {
//   return Math.min(prev, curr);
// });
// console.log(minNum);

//Implementation:
function myReduce(arr, cb, acc) {
  for (var i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

var sum = myReduce(num, function(prev, curr) {
  return prev + curr;
}, 0);
console.log(sum);

var maxNum = myReduce(num, function(prev, curr) {
  return Math.max(prev, curr);
}, num[0]);
console.log(maxNum);

var minNum = myReduce(num, function(prev, curr) {
  return Math.min(prev, curr);
}, num[0]);
console.log(minNum);

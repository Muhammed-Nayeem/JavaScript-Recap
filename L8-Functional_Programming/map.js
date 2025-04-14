//map is a built in method of an Array; it works like loops but it is special type of loop, but it cannot modify the original array, yes you can make a new array by modifying the original array's value and it returns a new value and don't change the original value;
var numbers = [1, 2, 3, 4, 5];

// var newArr = numbers.map(function (value, index, arr) {
//   return Math.random() * 10;
// });
// console.log(newArr);

// var modifiedArr = numbers.map(function(value, index, arr) {
//   return value + 2;
// });
// console.log(modifiedArr);

// var square = numbers.map(function(value, index, arr) {
//   return value * 2;
// });
// console.log(square);

// var qb = numbers.map(function(value, index, arr) {
//   return value * value * value;
// });
// console.log(qb);

// var mTen = numbers.map(function(value, index, arr) {
//   return value * 10;
// });
// console.log(mTen);

//Implementation:
function myMap(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var temp = cb(arr[i], i, arr);
    newArr.push(temp);
  }
  return newArr;
}

//Random Array:
var newArr = myMap(numbers, function(value, index, arr) {
  return Math.random() * 10;
});
console.log(newArr);

//Modified Array with addition:
var modifiedArr = myMap(numbers, function(value, index, arr) {
  return value + 2;
});
console.log(modifiedArr);

//Square Array:
var square = myMap(numbers, function(value, index, arr) {
  return value * 2;
});
console.log(square);

//qb array:
var qb = myMap(numbers, function(value, index, arr) {
  return value * value * value;
});
console.log(qb);

//mTen array:
var mTen = myMap(numbers, function(value, index, arr) {
  return value * 10;
});
console.log(mTen);

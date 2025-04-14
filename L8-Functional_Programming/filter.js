//Filter is a built in array method:
var numbers = [8, 4, 1, 3, 2, 9, 5, 10, 6, 7];

// var evenNum = numbers.filter(function(value, index, arr) {
//   return value % 2 === 0;
// });
// console.log(evenNum);

// var oddNum = numbers.filter(function(value, index, arr) {
//   return value % 2 !== 0;
// });
// console.log(oddNum);

// var gtFive = numbers.filter(function(value, index, arr) {
//   return value > 5;
// });
// console.log(gtFive);

//Implementation:
function myFilter(arr, cb) {
  var filteredArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

//EvenNum:
var evenNum = myFilter(numbers, function(value, index, arr) {
  return value % 2 === 0;
});
console.log(evenNum);

//OddNum:
var oddNum = myFilter(numbers, function(value, index, arr) {
  return value % 2 !== 0;
});
console.log(oddNum);

//gtFive:
var gtFive = myFilter(numbers, function(value, index, arr) {
  return value > 5;
});
console.log(gtFive);

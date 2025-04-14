//forEach is a built in method of an Array; it works like loops but it is special type of loop, but it modify the original array;
var numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(value, index, arr) {
//   console.log(value, index, arr);
// });

// var sum = 0;
// numbers.forEach(function(value, index, arr) {
//   sum += value;
// });
// console.log("Sum is : "+ sum);

// numbers.forEach(function(value, index, arr) {
//   arr[index] = value + 2;
//   console.log(value, index, arr);
// });
// console.log(numbers);

//Implementation:
function myForEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

//Traversing:
myForEach(numbers, function(value, index, arr) {
  console.log(value, index, arr);
});

//Sum:
var sum = 0;
myForEach(numbers, function(value, index, arr) {
  sum += value;
});
console.log("Sum is: "+ sum);

//Array numbers modifying:
myForEach(numbers, function(value, index, arr) {
  arr[index] = value + 2;
  console.log(value, index, arr);
});
console.log(numbers);

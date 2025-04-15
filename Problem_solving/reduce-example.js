var arr = [5, 3, 2, 1, 6];

function findSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function findMax(arr) {
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// var output = findSum(arr);
// var output = findMax(arr);
// console.log(output);

// var output = arr.reduce(function(acc, curr) {
//   acc = acc + curr;
//   return acc;
// }, 0);
// console.log(output);

var output = arr.reduce(function (acc, curr) {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);
console.log(output);

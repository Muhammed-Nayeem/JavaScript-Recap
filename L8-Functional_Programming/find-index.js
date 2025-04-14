var num = [1, 2, 5, 3, 4, 8, 7, 9, 6];

// var res1 = num.find(function(value, index, arr) {
//   return value === 8;
// });
// console.log(res1);

// var res2 = num.findIndex(function(value, index, arr) {
//   return value === 8;
// });
// console.log(res2);

//Implementation:
function find_index(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      // return arr[i];
      return i;
    }
  }
}

// var res3 = find_index(num, function(value, index, arr) {
//   return value === 8;
// });
// console.log(res3);

var res4 = find_index(num, function(value, index, arr) {
  return value === 8;
});
console.log(res4);

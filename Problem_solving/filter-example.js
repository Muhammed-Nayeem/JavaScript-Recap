var arr = [5, 3, 2, 1, 6];

function isEven(v) {
  return v % 2 === 0;
}

function isOdd(v) {
  return v % 2 !== 0;
}

// var output = arr.filter(isEven);

// var output = arr.filter(isOdd);

var output = arr.filter(function (value, index, arr) {
  return value % 2 === 0;
});
console.log(output);

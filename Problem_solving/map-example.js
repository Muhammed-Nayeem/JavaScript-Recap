var arr = [5, 3, 2, 1, 6];

//double: 10, 6, 4, 2, 12
//triple: 15, 9, 6, 3, 18
//binary: ["", "", "", "", ""]

function double(v) {
  return v * 2;
}

function triple(v) {
  return v * 3;
}

function binary(v) {
  return v.toString(2);
}

var output = arr.map(function(value, index, number) {
  return value * 2;
});

// var output = arr.map(double);

// var output = arr.map(triple);

// var output = arr.map(binary);

console.log(output);

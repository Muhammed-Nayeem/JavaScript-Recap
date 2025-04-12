var arr = [1, 2, 3, 4];
var arr2 = [5, 6, 7, 8];

// console.log(arr.join("|"));
// console.log(arr.join(" "));

// console.log(arr.fill(0));

// var arr3 = arr.concat(arr2);
// console.log(arr3);

// console.log(Array.isArray(arr2));

// var arr4 = arr;

// console.log(arr);
// console.log(arr4);

// arr4[0] = 10;
// arr4[4] = 20;

// console.log(arr);
// console.log(arr4);

var arr4 = Array.from(arr);

console.log(arr);
console.log(arr4);

arr4[0] = 20;
arr4[4] = 10;

console.log(arr);
console.log(arr4);

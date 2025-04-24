//weak set:
let a = { a: 10, b: 20 },
  b = { c: 30, d: 40 };

// let set = new Set([a, b]);

// a = null;

// let arr = [...set];
// console.log(arr);
// console.log(arr[0]);

// console.log(set);

let weakSet = new WeakSet([a, b]);

a = null;

console.log(weakSet.has(a));
console.log(weakSet.has(b));
console.log(weakSet);

//weak map:
let x = {};
let y = {};

let weakMap = new WeakMap([
  [x, "Value for X"],
  [y, "Value for Y"],
]);
console.log(weakMap);

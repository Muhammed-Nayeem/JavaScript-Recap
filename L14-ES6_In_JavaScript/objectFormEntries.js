//Array to Object: fromEntries
let point = {
  x: 10,
  y: 20,
  z: 30,
};

// console.log(Object.entries(point));


let objArr = [
  ["x", 10],
  ["y", 20],
  ["z", 30],
];

console.log(Object.fromEntries(objArr));

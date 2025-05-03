//Array Literal:
// let arr = [];
let arr = [1, 2, 3, 4, 5];

// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// arr[3] = 4;
// arr[4] = 5;

// arr[0] = 10;
// arr[1] = 20;
// arr[10] = 30;
// arr[11] = 40;

// console.log(arr);
// console.log(arr.length);

const names = [
  "Nayeem",
  "Joydip",
  "Indrajit",
  "Mohon",
  "Partha",
  "Kokin",
  "Dipongkar",
];

// names[7] = "Pranab";
// names[8] = "Rafsan";

names[names.length] = "Pranab";
names[names.length++] = "Rafsan";
names[names.length++] = "Shuvo";

console.log(names);
console.log(names.length);

let lastIndex = names.length-1;
console.log(lastIndex);
console.log(names[lastIndex]);

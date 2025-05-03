//Traversing Array Elements:
const arr = [47, 5, 10, 78, 63, 99, 14, 55, 39];
const n = arr[3];
const m = arr[2];
const x = 1, y = 0;

console.log(m, n, x, y, arr[x], arr[y], arr[x] + arr[y], arr[x + y + 1]);

// arr[0];
// arr[1];
// arr[2];
// arr[3];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
let avg = sum / arr.length;
console.log(`Sum is: ${sum} & Average is: ${avg}`);

let largeNumber = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largeNumber) {
    largeNumber = arr[i];
  }
}
console.log(`Largest Number is: ${largeNumber}`);

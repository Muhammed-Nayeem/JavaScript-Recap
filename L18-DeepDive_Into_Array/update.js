/**
 * @Title: Update Array Elements and Fill Array
 */

// Array Fill Manual
let arr = new Array(10);
for (let i = 0; i < arr.length; i++) {
  arr[i] = false;
}
console.log(arr);

// Array Fill
let arr2 = new Array(5);
arr2.fill(0);
console.log(arr2);

const names = ['Nayem', 'Shegufa', 'Salvy'];
names[0] = "Muhammed Nayeem";
names[1] = "Shegufa Taranjum";
names[2] = "Shayik Salvy";
console.log(names);

// Fill Array and Update
let arr3 = new Array(9);
arr3.fill(false);
for (let i = 0; i < arr3.length; i++) {
  let rand = Math.floor(Math.random() * 10 + 1);
  arr3[i] = rand > 5 ? "X" : "o";
}
console.log(arr3);

// Array is mutable
function update(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `${i + 1}. ${arr[i]}`;
  }
  return arr;
}

let updateNames = update(names);
console.log(names);
console.log(updateNames);
console.log(names === updateNames);

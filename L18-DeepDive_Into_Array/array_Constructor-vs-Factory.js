//Array Initialization: Constructor vs Factory pattern

//Constructor Patter:
let arr = new Array(5);
arr[0] = 1;
arr[1] = 2;
console.log(arr);
console.log(arr.length);

let arr2 = new Array(1, 2, 3, 4, 5);
console.log(arr2);
console.log(arr2.length);

//Factory Pattern:
let arr3 = Array(5);
arr3[0] = 10;
arr3[1] = 20;
console.log(arr3);
console.log(arr3.length);

let arr4 = Array(10, 20, 30, 40, 50);
console.log(arr4);
console.log(arr4.length);

console.log(arr2.__proto__.constructor);
console.log(arr3.__proto__.constructor);

console.log(arr2.getPrototypeOf === arr3.getPrototypeOf);

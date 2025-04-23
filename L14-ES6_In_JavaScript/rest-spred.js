//Rest and Spread Operator: ...
//i) Rest ...(when using with function as parameter) then it call rest:
//ii) Spread ...(without function everywhere it is call spread):

function add(...rest) {
  return rest.reduce((a, b) => a + b);
}
console.log(add(1, 2, 3, 4, 5));


let num = [1, 2, 3, 4, 5];
let num2 = [5, 6, ...num];
console.log(...num);
console.log(num2);

let obj = {
  a: 10,
  b: 20,
};

let obj2 = {
  ...obj,
  c: 30,
};
console.log(obj);
console.log(obj2);

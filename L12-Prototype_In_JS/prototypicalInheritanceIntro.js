//Intro to prototypical inheritance and prototype:
var obj = {};
console.log(obj);

var obj2 = new Object();
console.log(obj2);

//check their parent base is same or not:
// obj.__proto__ === obj2.__proto__; //deprecated
// console.log(obj.__proto__ === obj2.__proto__);

//to get any object's prototype:
// Object.getPrototypeOf(obj);
// Object.getPrototypeOf(obj2);
console.log(Object.getPrototypeOf(obj));
console.log(Object.getPrototypeOf(obj2));

//check their parent base is same or not:
// Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj2);
console.log(Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj2));

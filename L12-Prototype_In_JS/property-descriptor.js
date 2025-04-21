//Property Descriptor:
var person = {
  name: "MD. Nayeem",
};
console.log(person);

// for (var item in person) {
//   console.log(item);
// }

// console.log("name" in person);

//get a object property descriptor:
// var descriptor = Object.getOwnPropertyDescriptor(person, "name");
// console.log(descriptor);

//toString property descriptor:
// var baseObj = Object.getPrototypeOf(person);
// var descriptor = Object.getOwnPropertyDescriptor(baseObj, "toString");
// console.log(descriptor);

//Let's make an person object's name properties descriptor:
Object.defineProperty(person, "name", {
  configurable: false,
  enumerable: false,
  writable: false,
});

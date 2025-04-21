//constructor property:
function Person() {
  this.name = "Muhammed Nayeem";
}

Person.prototype.PI = 3.1416;

var p1 = new Person();
console.log(p1);

var p2 = new Person();
console.log(p2);

// var proto = Object.getPrototypeOf(p1);
// console.log(proto);

// console.log(Person.prototype);
// console.log(Object.getPrototypeOf(p1) === Person.prototype);

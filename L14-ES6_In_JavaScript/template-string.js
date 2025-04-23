//Template Literal String:
var name = `Muhammed Nayeem`;
var age = 27;

// console.log(name, age);
// console.log("My name is "+ name+". And I am "+ age +" years old");

console.log(`My name is ${name}, my age is ${age} years. And I am ${age < 18 ? "not " : ""}adult.`);

var name = "Muhammed Shakib";
var fullName = "";

//using: if else statement condition
// if (name.length === 0) {
//   fullName = "Muhammed Nayeem";
// } else {
//   fullName = name;
// }
// console.log("Full Name: " + fullName);

//using: shorthand operator
fullName = name || "Muhammed Nayeem";
console.log("Full Name: " + fullName);

//Ex: 02
var isOk = true;

// if (isOk) {
//   console.log("Everything is ok!");
// }

isOk && console.log("Everything is ok!");

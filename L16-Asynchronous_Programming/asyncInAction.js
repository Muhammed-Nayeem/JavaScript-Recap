//Asynchronous Programming in Action:
console.log("I am Line One");

setTimeout(() => {
  console.log("I am Line Two");
}, 4000);

setTimeout(function () {
  console.log("I am Line Three");
}, 3000);

console.log("I am Line Four");

setTimeout(() => {
  console.log("I am Line Five");
}, 5000);

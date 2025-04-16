//IIFE : Immediately Invoked Function Expression;

// function demoFunc() {
//   console.log("A demo function");
// }
// demoFunc();

// var demoFunc = function() {
//   console.log("A demo function");
// }
// demoFunc();

// (function demoFunc() {
//   console.log("Hello World!");
// })();

// var sum = (function () {
//   return 10 + 20;
// })();
// console.log(sum);

var controller = (function () {
  var a = {
    name: "Muhammed Nayeem",
    uid: 1024,
  };
  return a;
})();

var interface = (function() {
  return "Hello "+ controller.name;
})();
console.log(interface);

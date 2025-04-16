//Closure: Closure is when a function is able to remember and access it's lexical scope and even when that function is executing outside of it's lexical scope;

//i) when a function is able to remember and access it's lexical scope:
// function testClosure() {
//   var msg = "Hi, I am learning Closure";
//   function sayHi() {
//     console.log(msg);
//   }
//   sayHi();
// }
// testClosure();

//ii) when that function is executing outside of it's lexical scope:
function testClosure() {
  var msg = "Hi, I am learning Closure";
  return function () {
    console.log(msg);
  }
}
var test = testClosure();
test();

// testClosure()();

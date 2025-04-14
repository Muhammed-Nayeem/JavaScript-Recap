//Closure means get the data from outer scope to inner scope;
var a = 20;

function test() {
  var x = 30;
  function innerTest() {
    console.log(x);
  }
  return innerTest;
}
var result = test();
console.dir(result());

// function abc(a, b, c) {
//   return a + b + c;
// }
// abc(10, 20, 30);

function a(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
var result = a(10)(20)(30);
console.log(result);

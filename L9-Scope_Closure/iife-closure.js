// for (var i = 1; i <= 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 1000 * i);
// }

//solution: IIFE
for (var i = 1; i <= 5; i++) {
  (function (n) {
    setTimeout(function () {
      console.log(n);
    }, 1000 * n);
  })(i);
}

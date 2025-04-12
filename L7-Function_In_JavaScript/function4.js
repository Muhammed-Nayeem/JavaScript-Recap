//Arguments object :
function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    // console.log(arguments[i]);
    sum += arguments[i];
  }
  console.log("Sum is: " + sum);
}
addAll(10, 20, 30, 40, 50);


function evenSum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] % 2 === 0) {
      sum += arguments[i];
    }
  }
  console.log("Even sum is: "+ sum);
}
evenSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

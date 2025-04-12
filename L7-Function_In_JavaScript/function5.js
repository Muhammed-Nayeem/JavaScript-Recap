//Return something from a function:
var arr = [10, 20, 30];
var arr2 = [40, 50, 60];
var arr3 = [70, 80, 90];

function sumOfArr(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

var result = sumOfArr(arr);
console.log(result);

var result2 = sumOfArr(arr2);
console.log(result2);

var result3 = sumOfArr(arr3);
console.log(result3);

//return a Object:
function objectMaker(name, email) {
  return {
    name: name,
    email: email,
  };
}

var me = objectMaker("Muhammed Nayeem", "mnayeem@gmail.com");
console.log(me);

var n = 100;

function change(n) {
  console.log("Number before change: "+ n);
  n = 10;
  console.log("Number after change: "+ n);
  return n;
}
console.log("Number before calling and change: "+ n);
change(n);
console.log("Number after calling and change: "+ n);

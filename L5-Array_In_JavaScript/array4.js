//Search a value from array:
var num = [1, 2, 3, 4, 5, 30, 6, 7, 8, 42, 9, 10];
var find = 42;
var isFound = false;

for (var i = 0; i < num.length; i++) {
  if (find === num[i]) {
    console.log(num[i] + " is found at :" + i);
    isFound = true;
    break;
  }
}
if (!isFound) {
  console.log("Value not found!");
}

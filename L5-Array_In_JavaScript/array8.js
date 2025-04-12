//find maximum number from an array:
var num = [3, 8, 4, 1, 5, 2, 7, 10, 6, 9];
var maxNum = num[0];

for (var i = 0; i < num.length; i++) {
  if (num[i] > maxNum) {
    maxNum = num[i];
  }
}
console.log("Maximum Number is: " + maxNum);

var minNum = num[0];
for (var i = 0; i < num.length; i++) {
  if (num[i] < minNum) {
    minNum = num[i];
  }
}
console.log("Minimum Number is: " + minNum);

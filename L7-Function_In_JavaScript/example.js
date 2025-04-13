//Function for get maximum value from an array:
var num = [4, 8, 1, 6, 2, 10, 3, 9, 7, 5];

function getMaxNum(arr) {
  var maxNum = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
var maximumNumber = getMaxNum(num);
console.log("Maximum Number is: " + maximumNumber);

function getMinNumber(arr) {
  var minNum = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }
  return minNum;
}
var minimumNumber = getMinNumber(num);
console.log("Minimum Number is: " + minimumNumber);

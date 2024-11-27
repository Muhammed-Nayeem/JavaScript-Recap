//Example: Write a function for find a max number from an array!
const numbers = [25, 10, 60, 30, 80, 75, 20, 5, 55, 45, 95, 20, 40, 65, 90, 50];

function getMaximumNumber(numArr) {
  let max_num = numArr[0];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > max_num) {
      max_num = numArr[i];
    }
  }
  return max_num;
}

let maximumNumber = getMaximumNumber(numbers);
console.log("Maximum Number : ", maximumNumber);


//Example: Write a function for find a minimum number from an array!
const numbers2 = [25, 10, 60, 30, 80, 75, 20, 5, 55, 45, 95, 20, 40, 65, 90, 50];

function getMinimumNumber(numArr) {
  let min_num = numArr[0];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] < min_num) {
      min_num = numArr[i];
    }
  }
  return min_num;
}

let minimumNumber = getMinimumNumber(numbers2);
console.log("Minimum Number : ", minimumNumber);


//Example: write a higher order function for find a minimum and maximum number from an array!
function getMinMaxNumber(numArr, cbFunc) {
  let exactNum = numArr[0];
  for (let i = 0; i < numArr.length; i++) {
    if (cbFunc(numArr[i], exactNum)) {
      exactNum = numArr[i];
    }
  }
  return exactNum;
}

//Maximum Number:
let maxNum = getMinMaxNumber(numbers, function(num1, num2) {
  return num1 > num2;
});

//Minimum Number:
let minNum = getMinMaxNumber(numbers, function(num1, num2) {
  return num1 < num2;
});


console.log("Maximum Number: ", maxNum);
console.log("Minimum Number: ", minNum);

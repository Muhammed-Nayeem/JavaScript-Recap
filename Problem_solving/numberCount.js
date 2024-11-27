// You are given an array of numbers. Count how many times the a number is repeated in the array.

let numbers = [5, 6, 11, 12, 98, 5];

function repeatedNumberCount(numArr, searchNum) {
  let num_count = 0;

  for (let i = 0; i < numArr.length; i++) {
    if (searchNum === numArr[i]) {
      num_count++;
    }
  }
  return num_count;
}

// const count_num = repeatedNumberCount(numbers, 5);
const count_num = repeatedNumberCount(numbers, 25);
console.log("Number Repetition Count: ", count_num);

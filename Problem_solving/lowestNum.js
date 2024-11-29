// Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 115, 137];

function lowestNum(numArr) {
  let min_num = numArr[0];

  for (let value of numArr) {
    if (value < min_num) {
      min_num = value;
    }
  }
  return min_num;
}

const lowestNumber = lowestNum(heights2);
console.log("Lowest Number is: ", lowestNumber);

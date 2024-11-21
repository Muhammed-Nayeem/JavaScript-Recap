var oddSum = 0, i = 1;

while(i <= 10) {
  if (i % 2 !== 0) {
    // console.log(i);
    oddSum += i;
  }
  i++;
}

console.log("Sum of odd num: ", oddSum);

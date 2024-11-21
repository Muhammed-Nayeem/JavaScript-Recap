var evenSum = 0, i = 1;

while(i <= 10) {
  if (i % 2 === 0) {
    // console.log(i);
    evenSum += i;
  }
  i++;
}

console.log("Sum of even num: ", evenSum);

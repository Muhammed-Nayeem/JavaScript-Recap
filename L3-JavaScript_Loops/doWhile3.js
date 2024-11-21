//Even Number and Even Sum:
var evenSum = 0;
var  i = 1;

//Even Number print:
do {
  if (i % 2 === 0) {
    // console.log(i);
    evenSum += i;
  }
  i++;
} while (i <= 10);

console.log("Sum of Even Num: ", evenSum);

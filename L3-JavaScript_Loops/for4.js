//Sum of odd number
var sum = 0, i;

//Even Sum:
for (i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log("Sum is : ", sum);

var sum = 0;

//Odd sum:
for (var i = 1; i <= 10; i++) {
  if (i % 2 === 1) {
    sum += i;
  }
}

console.log("Sum is: ", sum);

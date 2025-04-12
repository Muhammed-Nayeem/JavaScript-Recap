//Array traversing means that touch each and every values of any array's which value they contain;
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(numbers);

//Not Dynamic:
// numbers[0];
// numbers[1];
// numbers[2];

//More Dynamic way to traverse an Array:
for (var i = 0; i < numbers.length; i++) {
  console.log("i("+i+") index is now at :"+ numbers[i]);
}

//Find the summation of this array:
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  // sum = sum + numbers[i];
  sum += numbers[i];
}
console.log("Sum is : "+ sum);

//Even Sum:
var evenSum = 0;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenSum += numbers[i];
  }
}
console.log("Even sum is: "+ evenSum);

//Odd Sum:
var oddSum = 0;
var i = 0;

while (i < numbers.length) {
  if (numbers[i] % 2 === 1) {
    oddSum += numbers[i];
  }
  i++;
}
console.log("Odd sum is: "+ oddSum);

//modified array's values:
for (var i = 0; i < numbers.length; i++) {
  numbers[i] += 2;
}
console.log(numbers);

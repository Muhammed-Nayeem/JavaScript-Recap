/**
 * @title: Anatomy of Reduce Method
 */

// Accumulate - gather together or acquire an increasing number or quantity of

let numbers = [1, 2, 3, 4, 5];

// Implementing Sum
function sumFunc(accumulator, currentValue, index) {
	console.log(`Index ${index} - Acc ${accumulator} - Cur ${currentValue}`);
	return accumulator + currentValue;
}
const sum = numbers.reduce(sumFunc, 10);
console.log(sum);

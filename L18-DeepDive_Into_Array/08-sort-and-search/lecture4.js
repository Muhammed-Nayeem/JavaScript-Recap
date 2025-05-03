/**
 * @title: How to Work with Sort Method
 */

// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// Will not work perfectly
// numbers.sort();
// console.log(numbers);

// We have to define the callback with the condition
// Suppose we want to sort the numbers in ascending order
// const numbers = [10, 1, 3, 78, 39, 22, 34, 2, 11, 30, 567, 19, 90, 100];
// numbers.sort((a, b) => {
// 	console.log(a, b);
// 	return b - a;
// });
// console.log(numbers);

// Now we want to sort it in descending order

//If we want to sort strings then what should we do?
let strings = ['apple', 'Cat', 'Ball', 'Apple'];
strings.sort((a, b) => {
	a = a.toLowerCase();
	b = b.toLowerCase();
	if (a > b) return 1;
	if (b > a) return -1;
	return 0;
});
console.log(strings);

// What if we have two strings that start with same letter?!!

let strings2 = ['Apple', 'Ant', 'Ball', 'Cat'];
strings2.sort((a, b) => {
	if (a > b) return 1;
	if (b > a) return -1;
	return 0;
});
console.log(strings2);
/**
 * But why?
 * If the first character of two or more strings are same; then the sort method comapres the second character of those Strings. If these are also same then the comparison would be among the next letters.
 */

// We can sort objects in an Array by any commmon property value of the objects

// Suppose we have an Array with objects of students data of a class. Now we want to sort the array depending on the roll number in ascending order;

const team = [
	{ id: 2, name: 'Shegufa' },
	{ id: 4, name: 'Badhon' },
	{ id: 10, name: 'Setu' },
	{ id: 1, name: 'Nayem' },
	{ id: 8, name: 'Tamim' },
	{ id: 3, name: 'Salvy' },
	{ id: 6, name: 'Sakib' },
	{ id: 5, name: 'Asief' },
	{ id: 9, name: 'Riya' },
	{ id: 7, name: 'Mehedi' },
];

// Sort By Id
team.sort((a, b) => {
	if (a.id > b.id) return 1;
	if (a.id < b.id) return -1;
	return 0;
});
console.log(team);

// Sort By Name
team.sort((a, b) => {
	if (a.name > b.name) return 1;
	if (a.name < b.name) return -1;
	return 0;
});
console.log(team);

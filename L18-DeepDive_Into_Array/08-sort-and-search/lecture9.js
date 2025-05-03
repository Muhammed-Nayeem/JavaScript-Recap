/**
 * @title: FindIndex Method in Javascript
 */

const arr = [1, 3, 78, 39, 22, 34, 2, 11, 30, 567, 19, 90];

let todos = [
	{ name: 'Project 1', isDone: true },
	{ name: 'Project 2', isDone: true },
	{ name: 'Project 3', isDone: true },
	{ name: 'Project 4', isDone: false },
	{ name: 'Project 5', isDone: false },
	{ name: 'Project 6', isDone: false },
	{ name: 'Project 7', isDone: false },
];

const index1 = arr.findIndex((item) => item === 110);
console.log(index1);

const index2 = todos.findIndex((item) => item.isDone === false);
console.log(index2);

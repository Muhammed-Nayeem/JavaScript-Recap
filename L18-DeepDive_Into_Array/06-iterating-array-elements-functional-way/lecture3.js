/**
 * @title: Filter Method
 */

const studentArray = [
	{
		id: 1,
		name: 'Hm Nayem',
		gpa: 3.99,
		email: 'nayem@gmail.com',
		due: true,
		dueAmount: 10000,
	},
	{
		id: 2,
		name: 'Shegufa Taraanjum',
		gpa: 3.87,
		email: 'shegufa@gmail.com',
		due: false,
		dueAmount: 0,
	},
	{
		id: 3,
		name: 'Tamim',
		gpa: 3.8,
		email: 'tamim@gmail.com',
		due: true,
		dueAmount: 12000,
	},
	{
		id: 4,
		name: 'Asief Mahir',
		gpa: 2.99,
		email: 'mahir@gmail.com',
		due: false,
		dueAmount: 0,
	},
	{
		id: 5,
		name: 'Abir Azim',
		gpa: 2.6,
		email: 'abirAzim@gmail.com',
		due: false,
		dueAmount: 0,
	},
];

// now we want to filter the students who has gpa under 3
const lowGpa = studentArray.filter((value) => value.gpa < 3);
// console.log(lowGpa);
// and send them inspiring message to study more or try harder [Task]
const dueStudents = studentArray.filter((value) => value.dueAmount > 0);
console.log(dueStudents);

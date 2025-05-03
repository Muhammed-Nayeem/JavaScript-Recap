/**
 * @title: Some and Every
 */

let productReview = [
	{ name: 'md Ashraf', response: 'positive', ratings: '5' },
	{ name: 'Jalal Uddin', response: 'positive', ratings: '4' },
	{ name: 'Sakib Al Hasan', response: 'negative', ratings: '4' },
	{ name: 'Tamim Iqbal', response: 'positive', ratings: '4' },
];

const positive = productReview.every((value) => value.ratings > 3);
if (positive) {
	console.log('100% Positive Reviews');
} else {
	console.log('Some Customer Not Satisfied');
}

let testRunsInASingleMatch = [
	{ name: 'DPMD Jayawardene	', runs: 374 },
	{ name: 'BC Lara', runs: 375 },
	{ name: 'ML Hayden', runs: 380 },
	{ name: 'BC Lara', runs: 400 },
];

const atLeastOne = testRunsInASingleMatch.some((value) => value.runs >= 400);
console.log(atLeastOne);

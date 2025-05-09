/**
 * @title: Implement Our Own Reduce
 */

function myReduce(arr, cb, init) {
	let acc = init,
		start = 0;
	if (!init) {
		acc = arr[0];
		start = 1;
	}
	for (let i = start; i < arr.length; i++) {
		acc = cb(acc, arr[i], i, arr);
	}
	return acc;
}

const arr = [1, 2, 3, 4, 5];
const sum = myReduce(
	arr,
	(acc, cur) => {
		return acc + cur;
	},
	10
);
console.log(sum);

const votes = [
	'Java',
	'Java',
	'Python',
	'Java',
	'Javascript',
	'Python',
	'Javascript',
];

const result = myReduce(
	votes,
	(acc, cur) => {
		if (acc[cur]) {
			acc[cur]++;
		} else {
			acc[cur] = 1;
		}
		return acc;
	},
	{}
);
console.log(result);

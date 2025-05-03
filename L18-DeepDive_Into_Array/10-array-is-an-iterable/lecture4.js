/**
 * @title: Array and For of Loop
 */

const array = ['a', 'b', 'c'];
const keys = array.keys();
const values = array.values();
const entries = array.entries();

console.log(keys); // Iterator of [0, 1, 2]
console.log(values); // Iterator of ['a', 'b', 'c']
console.log(entries); // Iterator of [[0, 'a'], [1, 'b'], [2, 'c']]

const loop = (it, name) => {
	for (let v of it) {
		console.log(`[${name}] - ${v}`);
	}
};

loop(keys, 'KEY');
loop(values, 'VALUE');
loop(entries, 'ENTRY');

const arr = [3, 5, 7, 9];
// for (let v of arr) {
// 	console.log(v);
// }

loop(arr, 'ARRAY');

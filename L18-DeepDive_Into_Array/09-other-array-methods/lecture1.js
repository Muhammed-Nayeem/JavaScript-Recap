/**
 * @title: Static Methods vs Instance Methods
 */

// What is Static Method?
// - This methods are class method but accessible every where without creating instance
const arr = [];
// arr.concat(); // Instance Method
// Array.from(); // Static Method

// Example of Javascript Static Method
// Array.from()
const s = Array.from('Stack Learner');
console.log(s);

const set = new Set(['foo', 'bar', 'baz', 'foo']);
const s1 = Array.from(set);
console.log(s1);

const mapper = new Map([
	['1', 'a'],
	['2', 'b'],
]);
Array.from(mapper.values()); // ['a', 'b'];

Array.from(mapper.keys()); // ['1', '2'];

function f() {
	return Array.from(arguments);
}
f(1, 2, 3); // [ 1, 2, 3 ]

// Using an arrow function as the map function to
// manipulate the elements
Array.from([1, 2, 3], (x) => x + x); // [2, 4, 6]

// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
Array.from({ length: 5 }, (v, i) => i * 2);
// [0, 1, 2, 3, 4]

// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
const range = (start, stop, step) =>
	Array.from(
		{ length: (stop - start) / step + 1 },
		(_, i) => start + i * step
	);

// Generate numbers range 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4]

// Generate numbers range 1..10 with step of 2
range(1, 10, 2);
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map((x) =>
	String.fromCharCode(x)
);
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// Array.isArray()
// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });

// Array.of()
Array.of(7); // [7]
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]

Array(7); // [7 Empty index]
Array(1, 2, 3); // [1, 2, 3]

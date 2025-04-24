//Set is a special data structures in Js:

let set = new Set([1, 2, 3]);

set.add(4);
set.add(5);
set.add(6);

//set won't store any duplicate values by default:
set.add(1);
set.add(2);
set.add(3);

// set.delete(5);
// set.clear();
// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());
// console.log(set.size);
// console.log(set.has(5));

// let keyIterate = set.keys();
// console.log(keyIterate.next());
// console.log(keyIterate.next());
// console.log(keyIterate.next());
// console.log(keyIterate.next());
// console.log(keyIterate.next());
// console.log(keyIterate.next());
// console.log(keyIterate.next());

console.log(set);

for (let v of set) {
  console.log(v);
}

set.forEach((v) => console.log(v));

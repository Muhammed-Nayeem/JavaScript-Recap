//Map:
let map = new Map([
  ["a", 10],
  ["b", 20],
  ["c", 30],
]);

// map.set("d", 40);
// map.delete("b");
// map.clear();

//map also won't allow duplicate value to store in it:
// map.set("b", 20);

// console.log(map.keys());
// console.log(map.values());
// console.log(map.entries());

// let keyIterate = map.keys();
// console.log(keyIterate.next());

console.log(map);
// console.log(map.size);
// console.log(map.get("c"));
// console.log(map.has("b"));

for (let [k, v] of map) {
  console.log(v, k);
}

map.forEach((v, k) => {
  console.log(k, v);
});

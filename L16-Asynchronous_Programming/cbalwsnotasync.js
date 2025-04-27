//Callback function not always asynchronous:
let arr = [1, 2, 3, 4];

// let square = arr.map((v) => v * v);
// console.log(square);

function asyncMap(arr, cb) {
  return arr.map((v) => {
    // setTimeout(cb.bind(null, v), 0);
    setTimeout(() => cb(v), 0);
  });
}

let qb = asyncMap(arr, (v) => {
  console.log(v);
});
console.log(qb);

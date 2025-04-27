//Promise API:
// let delay = (s) =>
//   new Promise((resolve) => {
//     setTimeout(resolve, s * 1000);
//   });

// delay(3).then(() => console.log("3 seconds delay."));
// delay(2).then(() => console.log("2 seconds delay."));
// delay(5).then(() => console.log("5 seconds delay."));
// delay(4).then(() => console.log("4 seconds delay."));

// let p1 = Promise.resolve("One");
// p1.then((v) => console.log(v));

// let p2 = Promise.resolve("Two");
// p2.then((v) => console.log(v));

// let p3 = Promise.resolve("Three");
// p3.then((v) => console.log(v));

// let promiseArr = [p1, p2, p3];
// Promise.all(promiseArr)
//   .then((arr) => console.log(arr));

let p1 = new Promise((resolve) => {
  setTimeout(resolve, 3000, "One");
});

let p2 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "Two");
});

let p3 = new Promise((resolve) => {
  setTimeout(resolve, 2000, "Three");
});

let promiseArr = [p1, p2, p3];
Promise.all(promiseArr)
  .then((arr) => console.log(arr));

Promise.race(promiseArr)
  .then((v) => console.log(v));

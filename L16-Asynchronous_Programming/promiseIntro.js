//Introduction to promise:
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 4000, "Test One");
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "Test Two");
// });

// p1.then((v) => {
//   console.log(v);
// }).catch((e) => {
//   console.log(e);
// });

// p2.then((v) => {
//   console.log(v);
// }).catch((e) => {
//   console.log(e);
// });

function getIphone(isPassed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPassed) {
        resolve("I have got an Iphone.");
      } else {
        reject("You've failed!");
      }
    }, 3000);
  });
}

getIphone(true)
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e);
  });

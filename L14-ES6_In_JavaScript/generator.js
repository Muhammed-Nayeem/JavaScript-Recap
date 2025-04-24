//Generator: Generator is mechanism which is make something Iterator and return iterator from anywhere;
let arr = [1, 2, 3, 4, 5];

function* generator(collection) {
  for (let i = 0; i < collection.length; i++) {
    yield collection[i];
  }
}
// let iterate = generator(arr);
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

function* generator2() {
  yield 1;
  yield 2;
  yield 3;
}
// let iterate2 = generator2();
// console.log(iterate2.next());
// console.log(iterate2.next());
// console.log(iterate2.next());
// console.log(iterate2.next());

let obj = {
  start: 1,
  end: 5,
  // [Symbol.iterator]: function() {
  //   let currentValue = this.start;
  //   return {
  //     next: () => {
  //       return {
  //         done: currentValue > this.end,
  //         value: currentValue > this.end ? undefined : currentValue++,
  //       };
  //     },
  //   };
  // },

  [Symbol.iterator]: function* () {
    let currentValue = this.start;
    while (currentValue <= this.end) {
      yield currentValue++;
    }
  },
};

let iterate = obj[Symbol.iterator]();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

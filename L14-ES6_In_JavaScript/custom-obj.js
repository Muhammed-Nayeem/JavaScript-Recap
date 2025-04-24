//Custom Iterable Object:
let obj = {
  start: 1,
  end: 5,
  [Symbol.iterator]: function () {
    let currentValue = this.start;
    let self = this;
    return {
      next() {
        return {
          done: currentValue > self.end,
          value: currentValue > self.end ? undefined : currentValue++,
        };
      },
    };
  },
};

let iterate = obj[Symbol.iterator]();
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

for (let v of obj) {
  console.log(v);
}

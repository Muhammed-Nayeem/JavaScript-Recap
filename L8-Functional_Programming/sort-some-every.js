var persons = [
  {
    name: "A",
    age: 26,
  },
  {
    name: "B",
    age: 19,
  },
  {
    name: "C",
    age: 24,
  },
  {
    name: "D",
    age: 21,
  },
];

var numbers = [8, 4, 1, 3, 2, 9, -5, 5, 10, 6, 7];

//array number sort:
numbers.sort(function(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
});
console.log(numbers);

//Array object Sort:
persons.sort(function(a, b) {
  if (a.age > b.age) {
    return 1;
  } else if (a.age < b.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(persons);

var res1 = numbers.every(function(value, index, arr) {
  return value > 0;
  // return value % 2 === 0;
});
console.log(res1);

var res2 = numbers.some(function(value, index, arr) {
  // return value % 2 !== 0;
  return value < 0;
});
console.log(res2);

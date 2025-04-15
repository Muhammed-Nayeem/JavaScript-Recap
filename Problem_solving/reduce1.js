var users = [
  { firstName: "Muhammed", lastName: "Nayeem", age: 26 },
  { firstName: "Pranab", lastName: "Roy", age: 27 },
  { firstName: "Shuvo", lastName: "Paul", age: 28 },
  { firstName: "Akash", lastName: "Das", age: 36 },
  { firstName: "Arman", lastName: "Ali", age: 45 },
  { firstName: "Piyas", lastName: "Roy", age: 55 },
  { firstName: "Aslam", lastName: "Ahmed", age: 26 },
  { firstName: "Asaduzzaman", lastName: "Nayeem", age: 27 },
];

//{26: 2, 27: 2, 28: 1}
// function getAges(arr) {
//   var age = {};
//   for (var i = 0; i < arr.length; i++) {
//     if (age[arr[i].age]) {
//       age[arr[i].age] = ++age[arr[i].age];
//     } else {
//       age[arr[i].age] = 1;
//     }
//   }
//   return age;
// }
// console.log(getAges(users));

var output = users.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});
console.log(output);


//getting all names which age is less then 30:
// var output = users.filter((x) => x.age < 30).map((x) => x.firstName);
// console.log(output);

//getting all names which age is less then 30:
// var user = users.reduce((acc, curr) => {
//   if (curr.age < 30) {
//     acc.push(curr.firstName);
//   }
//   return acc;
// }, []);
// console.log(user);

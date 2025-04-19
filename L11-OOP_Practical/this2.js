//Object Rules:
// var person = {
//   name: "Muhammed Nayeem",
//   age: 26,
//   job: "Student",
//   msg: function() {
//     console.log(this);
//   },
// };
// person.msg();

// var person2 = {
//   name: "Muhammed Nayeem",
//   age: 26,
//   job: "Student",
//   msg: function() {
//     console.log(this);
//     this.info();
//   },
//   info: function() {
//     console.log("Name: "+ this.name);
//     console.log("Job: "+ this.job);
//     console.log("Age: "+ this.age);
//   },
// };
// person2.msg();

// var person3 = {
//   name: "Muhammed Nayeem",
//   age: 26,
//   job: "Student",
//   anotherObj: {
//     name: "Nayeem Muhammed",
//     msg: function () {
//       console.log("Hello " + this.name);
//     },
//   },
// };
// person3.anotherObj.msg();

var person4 = {
  name: "Muhammed Nayeem",
  age: 26,
  job: "Student",
  anotherObj: {
    name: "Nayeem Muhammed",
    value: function () {
      console.log(this);
    },
  },
};
person4.anotherObj.value();

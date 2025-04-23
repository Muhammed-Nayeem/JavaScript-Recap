//Arrow function and this keyword value:

// function testMe() {
//   console.log(this);
// }
// testMe();
// testMe.call({});

// let testMe = () => {
//   console.log(this);
// };
// testMe.call({}); //it won't work -> it represent the window object instead of new empty object;

// let person = {
//   name: "Muhamme Nayeem",
//   age: 26,
//   print: function() {
//     console.log(`Name is: ${this.name}`);
//     console.log(`Age is: ${this.age}`);
//   },
// };

// person.print();

//This is not good way to declare a method inside an Object:
// let person = {
//   name: "Muhamme Nayeem",
//   age: 26,
//   print: () => {
//     console.log(`Name is: ${this.name}`); //refer window object : and undefined
//     console.log(`Age is: ${this.age}`); //refer window object : and undefined
//   },
// };
// person.print();

// let person = {
//   name: "Muhammed Nayeem",
//   age: 26,
//   print: function() {
//     function another() {
//       console.log(this);
//     }
//     another.call(this);
//   },
// };
// person.print();

// let person = {
//   name: "Muhammed Nayeem",
//   age: 26,
//   print: function() {
//     // let self = this;
//     setTimeout(function() {
//       console.log(`Hello ${this.name}`);
//     }.bind(this), 2000);
//   },
// };
// person.print();

let person = {
  name: "Muhammed Nayeem",
  age: 26,
  print: function() {
    setTimeout(() => {
      console.log(this);
      console.log(`Name i: ${this.name}`);
      console.log(`Age is: ${this.age}`);
    }, 2000);
  },
};
person.print();

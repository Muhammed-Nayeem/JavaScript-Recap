//object: bind, call & apply example
var person = {
  name: "Muhammed Nayeem",
  age: 26,
  job: "Student",
  anotherPerson: {
    name: "Nayeem Muhammed",
    sayHi: function () {
      console.log(this);
      console.log("My Name is: " + this.name);
    },
  },
};

person.anotherPerson.sayHi();

//call & apply method:
var personInfo = {
  name: "Muhammed Nayeem",
  age: 26,
  job: "Student",
  anotherPerson: {
    name: "Nayeem Muhammed",
    sayHi: function () {
      console.log(this);
      console.log("My Name is: "+ this.name);
    },
  },
};

personInfo.anotherPerson.sayHi.call(personInfo);
personInfo.anotherPerson.sayHi.apply(personInfo);

//bind method:
var persona = {
  name: "Muhammed Nayeem",
  age: 26,
  job: "Student",
  anotherPerson: {
    name: "Nayeem Muhammed",
    sayHi: function () {
      console.log(this);
      console.log("My Name is: "+ this.name);
    },
  },
};

var result = persona.anotherPerson.sayHi.bind(persona);
result();

//special use cases:
var nayeem = {
  name: "Muhammed Nayeem",
  dob: 1997,
  age: function(currentYear, msg) {
    console.log(msg +" "+ this.name +"! Your age is "+ (currentYear - this.dob));
  },
};
nayeem.age(2025, "Hello");

var indrajit = {
  name: "Indrajit Chandra",
  dob: 1998,
};
nayeem.age.call(indrajit, 2025, "Hello");
nayeem.age.apply(indrajit, [2025, "Hello"]);

var wayOne = nayeem.age.bind(indrajit, 2025);
wayOne("Hello");

var wayTwo = nayeem.age.bind(indrajit);
wayTwo(2025, "Hello");

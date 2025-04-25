//Static Method: Static method is associated with class;

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  print() {
    console.log(`Person Name: ${this.name}`);
    console.log(`Person Email: ${this.email}`);
  }

  static create(str) {
    let person = JSON.parse(str);
    return new Person(person.name, person.email);
  }
}

let str = `{"name": "Muhammed Nayeem", "email": "m.nayeem@gmail.com"}`;

let p1 = Person.create(str);
console.log(p1);

console.log(p1 instanceof Person);

p1.print();

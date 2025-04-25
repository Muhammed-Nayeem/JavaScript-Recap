//class properties and methods:
class Rectangle {
  constructor(width, height) {
    this.msg = "Hello";
    this.width = width;
    this.height = height;
    this.sayHi = function() {
      console.log(`${this.msg}! ${this.name}`);
    };
  }

  name = "Muhammed Nayeem";

  draw() {
    console.log("Drawing Rectangle...");
    this.printProperties();
  }

  printProperties() {
    this.sayHi();
    console.log(`Width is : ${this.width}`);
    console.log(`Height is : ${this.height}`);
  }
}

let rect = new Rectangle(20, 30);
rect.draw();

let rect2 = new Rectangle(40, 50);
rect2.draw();

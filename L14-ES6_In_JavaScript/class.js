//Class: class is a factory to create multiple object without any code duplication;

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw() {
    console.log("Drawing Rectangle...");
    this.printProperties();
  }

  printProperties() {
    console.log(`Width is : ${this.width}`);
    console.log(`Height is : ${this.height}`);
  }
}

let rect = new Rectangle(20, 30);
rect.draw();

let rect2 = new Rectangle(40, 50);
rect2.draw();

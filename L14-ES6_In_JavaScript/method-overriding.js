//Inheritance:
class Shape {
  constructor(color) {
    this.color = color;
  }
  draw() {
    console.log("I am drawing...");
  }
}

//Rectangle Class:
class Rectangle extends Shape {
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    this.properties();
    return 2 * (this.width + this.height);
  }
  
  //method overriding:
  draw() {
    console.log(`I am drawing Rectangle with color: ${this.color}`);
  }

  properties() {
    this.draw();
    console.log(`Rectangle width is: ${this.width}`);
    console.log(`Rectangle height is: ${this.height}`);
  }
}

let rect = new Rectangle(40, 60, "Green");
let result = rect.calculateArea();
console.log(result);

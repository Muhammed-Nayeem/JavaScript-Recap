import Shape from "./Shape";

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

  properties() {
    this.draw();
    console.log(`Rectangle color is: ${this.color}`);
    console.log(`Rectangle width is: ${this.width}`);
    console.log(`Rectangle height is: ${this.height}`);
  }
}

export default Rectangle;

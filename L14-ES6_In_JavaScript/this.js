//this in class:
class Circle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw() {
    console.log("Drawing Circle...");
    console.log(this);
  }
}

let c1 = new Circle(20, 30);

let anotherDraw = c1.draw;
anotherDraw();

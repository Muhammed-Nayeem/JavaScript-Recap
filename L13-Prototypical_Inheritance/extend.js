//extend or super:
//Constructor Rest:
function Shape(color) {
  this.color = color;
}
Shape.prototype = {
  common: function () {
    console.log("I am common method.");
  },
};
var shape = new Shape();

function Square(width, color) {
  Shape.call(this, color);
  this.width = width;
}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;
Square.prototype.draw = function () {
  console.log("I am drawing...!");
};
var sqr = new Square(10, "Green");

function Circle(width, color) {
  Shape.call(this, color);
  this.width = width;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
var c1 = new Circle(30, "Red");

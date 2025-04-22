/**
 * Prototypical Inheritance and Super call and extend keyword;
 */

//code reduce by creating common function:
function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

//Parent Common Constructor pattern to create Object:
function Shape(color) {
  this.color = color;
}
Shape.prototype = {
  common: function () {
    console.log("I am Common method.");
  },
};
// var shape = new Shape();

//Square constructor pattern to create Object:
function Square(width, color) {
  Shape.call(this, color);
  this.width = width;
}
extend(Shape, Square);
Square.prototype.draw = function () {
  console.log("I am Drawing...!");
};

var sqr1 = new Square(30, "Green");

//Circle constructor pattern to create Object:
function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
extend(Shape, Circle);

var c1 = new Circle(20, "Red");

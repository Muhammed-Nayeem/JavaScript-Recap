//What is class?
//In OOP, we can't imagine without Class, Class is a core building block of OOP;
//Class is just a factory to create multiple object without any code duplication;

//Example: code duplication
// var rect = {
//   width: 20,
//   height: 30,

//   calculateArea: function() {
//     return this.width * this.height;
//   },

//   calculateRange: function() {
//     return 2 * (this.width + this.height);
//   },
// };
// var area = rect.calculateArea();
// var range = rect.calculateRange();

// var square = {
//   width: 20,
//   height: 30,

//   calculateArea: function() {
//     return this.width * this.height;
//   },

//   calculateRange: function() {
//     return 2 * (this.width + this.height);
//   },
// }

// var area2 = square.calculateArea();
// var range2 = square.calculateRange();

class Rect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculateRange() {
    return 2 * (this.width + this.height);
  }
}

var rect1 = new Rect(20, 30);
rect1.calculateArea();

var rect2 = new Rect(30, 40);
rect2.calculateArea();

var rect3 = new Rect(40, 50);
rect3.calculateArea();

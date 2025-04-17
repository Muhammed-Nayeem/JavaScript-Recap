//What is Object-Oriented Programming?
//Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code: data in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).

//Example: Procedural Programming
// var width = 20;
// var height = 30;

// function calculateArea(width, height) {
//   return width * height;
// }

// function calculateRange(width, height) {
//   return 2 * (width + height);
// }

// var area = calculateArea(width, height);
// var range = calculateRange(width, height);

//Object Oriented example:
var rect = {
  width: 20,
  height: 30,

  calculateArea: function() {
    return this.width * this.height;
  },

  calculateRange: function() {
    return 2 * (this.width + this.height);
  },
};

var area = rect.calculateArea();
var range = rect.calculateRange();

//instance and prototype using:

var Square = function (width) {
  this.width = width;

  this.getWidth = function() {
    console.log("My width is: "+ this.width);
    // this.draw();
  };
};

Square.prototype = {
  draw: function () {
    console.log("Draw...");
    this.getWidth();
  },
  toString: function() {
    return "My width is: "+ this.width;
  },
};

var sqr1 = new Square(50);
var sqr2 = new Square(100);

console.log(Object.keys(sqr1));

for (var item in sqr1) {
  console.log(item);
}

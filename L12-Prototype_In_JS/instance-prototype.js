//Instance vs Prototype member:
var Rect = function (width) {
  this.width = width;

  this.getWidth = function() {
    console.log("My width is: "+ this.width);
    this.draw();
  };
};

Rect.prototype = {
  draw: function () {
    console.log("Draw...");
  },
  toString: function () {
    return "My width is: "+ this.width;
  },
};

var rect1 = new Rect(5);
var rect2 = new Rect(10);

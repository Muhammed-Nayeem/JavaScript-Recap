//Factory Pattern: Factory Pattern is used for creating multiple Object without any code duplication instead of class;
var createRect = function (width, height) {
  return {
    width: width,
    height: height,

    draw: function () {
      console.log("I am drawing Rectangle!");
      console.log(this);
      this.printProperties();
    },

    printProperties: function () {
      console.log("My width is: " + this.width);
      console.log("My height is: " + this.height);
    },
  };
};

var rect = createRect(30, 40);
rect.draw();

var rect2 = createRect(60, 120);
rect2.draw();

var rect3 = createRect(20, 50);
rect3.draw();

//Constructor Pattern: Constructor Patter is used for creating multiple Objects without any code duplication instead of using class;
var Rectangle = function(width, height) {
  this.width = width;
  this.height = height;

  this.draw = function() {
    console.log("I am drawing Rectangle!");
    console.log(this);
    this.printProperties();
  };

  this.printProperties = function() {
    console.log("My width is: "+ this.width);
    console.log("My height is: "+ this.height);
  };
};

var rect = new Rectangle(20, 30);
rect.draw();

var rect2 = new Rectangle(40, 60);
rect2.draw();

var rect3 = new Rectangle(50, 70);
rect3.draw();

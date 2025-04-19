//Constructor Function:
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
}

var rect = new Rectangle(20, 40);
rect.draw();

//new keyword implementation:
function myNew(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArray = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArray.slice(1));
  return obj;
}

//creating object with myNew function:
var rect2 = myNew(Rectangle, 50, 70);
rect2.draw();

//creating object with myNew function:
var rect3 = myNew(Rectangle, 60, 80);
rect3.draw();

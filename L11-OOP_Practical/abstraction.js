//Abstraction & getter & setter:
var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  var position = {
    x: 200,
    y: 400,
  };

  //Not a good way:
  // this.getPosition = function() {
  //   return position;
  // };

  var printProperties = function () {
    console.log("My width is: " + this.width);
    console.log("My height is: " + this.height);
  }.bind(this);

  this.draw = function () {
    console.log("I am drawing Rectangle!");
    console.log(this);
    printProperties();
  };

  //best practice:
  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    set: function (value) {
      if (value) {
        position = value;
      }
    },
  });
};

var rect = new Rectangle(20, 30);

// var position = rect.getPosition();
// console.log(position);

console.log(rect.position);

var position = rect.position;
position.x = 600;
position.y = 800;

console.log(rect.position);

rect.draw();

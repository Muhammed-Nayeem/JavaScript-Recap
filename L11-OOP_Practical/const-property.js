var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("I am drawing Rectangle!");
    console.log(this);
    this.printProperties();
  };

  this.printProperties = function () {
    console.log("My width is: " + this.width);
    console.log("My Height is: " + this.height);
  };
};

var rect = new Rectangle(20, 30);
rect.draw();

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
      console.log("My Height is: " + this.height);
    },
  };
};

var rect2 = createRect(60, 80);
rect2.draw();

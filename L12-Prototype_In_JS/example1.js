//What is prototype and inheritance? Let assume we have 3 class named Rectangle, Square, Circle and it has some properties and some methods, and from this methods some are common in every classes and we are going to create a new Class name Shape where have the common methods in one place and then we'll inherit this Shape class for our existing every class for the place of common methods: and it calls Inheritance but we have to do it with prototype;

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
    console.log("My height is: " + this.height);
  };
};

var rect = new Rectangle(20, 30);
rect.draw();

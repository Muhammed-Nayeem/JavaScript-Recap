//This keyword and it's value: 
var rect = {
  width: 20,
  height: 30,

  draw: function() {
    console.log("I am drawing Rectangle!");
    console.log(this);
    this.printProperties();
  },

  printProperties: function() {
    console.log("My width is: "+ this.width);
    console.log("My height is: "+ this.height);
    console.log(this);
  },
};

rect.draw();

function myFunc() {
  console.log(this);
}

myFunc();

var another = {
  width: 40,
  height: 60,

  print: rect.printProperties,
};

another.print();

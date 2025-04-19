//Object Literal with methods: Anything in an object(properties and methods) that you want to access then you have to use this keyword; because at that time this keyword means this object itself;
var rect = {
  width: 20,
  height: 30,

  draw: function() {
    console.log("I am drawing Rectangle");
    // console.log(this);
    this.printProperties();
    this.whichObject();
  },

  printProperties: function() {
    console.log("My width is: "+ this.width);
    console.log("My height is: "+ this.height);
  },

  whichObject: function() {
    console.log(this);
  },
};

rect.draw();

//Some common and useful Object-Methods:
var point = {
  x: 10,
  y: 20,
  z: 30,
};
console.log(point);

//Methods:
console.log(Object.keys(point));
console.log(Object.values(point));
console.log(Object.entries(point));

//Object Cloning Method:
// var point2 = point;
// point2.x = 40;
// point2.m = 50;
// console.log(point);
// console.log(point2);

var point2 = Object.assign({}, point);
point2.x = 40;
point2.m = 50;
console.log(point);
console.log(point2);

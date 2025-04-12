//Accessing Object properties: i)Dot Notation & ii)Bracket Notation

var point = {
  x: 10,
  y: 20,
  z: 30,
};

// i)Accessing by Dot-Notation:
// console.log(point.x);
// console.log(point.y);
// console.log(point.z);

// console.log(point.x + point.z);
// console.log(point.y + point.x + point.z);


// ii)Accessing by Bracket-Notation:
// console.log(point["x"]);
// console.log(point['y']);
// console.log(point["z"]);

// console.log(point["x"] + point["y"]);
// console.log(point['x'] + point['y'] + point['z']);

// console.log(point.x + point["y"] + point['z']);

var show = "x";
console.log(point[show]);

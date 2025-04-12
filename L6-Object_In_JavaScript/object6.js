//Object Iterate: by for-in loop;
var point = {
  x: 10,
  y: 20,
  z: 30,
};

//have this property or not:
// console.log("y" in point);
// console.log("x" in point);
// console.log("z" in point);

//iterate:
for (var prop in point) {
  console.log(prop);
  console.log(prop +":"+ point[prop]);
}

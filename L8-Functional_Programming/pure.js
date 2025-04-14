/**
 * Pure Function;
 * It gives you the same result if you give the same arguments again & again;
 * It does not cause any observable side effects;
 */

//A Solid Pure Function:
function square(n) {
  return n * n;
}
console.log(square(3));
console.log(square(3));
console.log(square(3));

//Non Pure Function:
var n = 10;
function change() {
  n = 100;
}
change();
console.log(n);

//Non pure function:
var point = {
  x: 10,
  y: 20,
};

function changeMe(obj) {
  obj.x = 100,
  obj.y = 200,
  console.log(obj);
}
changeMe(point);
console.log(point);

//Pass by value or Pass by references : Call by value or Call by references;

//pass by value or call by value:
var n = 10;

function change(n) {
  n = n + 100;
  console.log(n);
}
change(n);
console.log(n);

//pass by references or call by references:
var point = {
  x: 10,
  y: 20,
};

function changeMe(obj) {
  obj.x = obj.x + 100;
  obj.y = obj.y + 200;
  console.log(obj);
}
changeMe(point);
console.log(point);

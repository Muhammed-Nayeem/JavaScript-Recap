//Object Enhance:
let a = 10, b = 20;

let point = {
  a: a,
  b: b,
  print: function(c, d) {
    console.log(`A : ${this.a}`);
    console.log(`B : ${this.b}`);
    console.log(`C : ${c}`);
    console.log(`D : ${d}`);
    console.log(this.a + this.b + c + d);
  }
};
point.print(30, 40);

//Enhance Object:
let coordinates = {
  a,
  b,
  print() {
    console.log(`A is : ${this.a}`);
    console.log(`B is : ${this.b}`);
  },
};
coordinates.print();

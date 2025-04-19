//bca -> bind, call, apply:
function myFunc(c, d) {
  console.log(this);
  console.log(this.a + this.b + c + d);
}

//object define:
var num = {
  a: 30,
  b: 60,
};

//call method:
myFunc.call({a: 20, b: 40}, 10, 50);
myFunc.call(num, 10, 20);

//apply method:
myFunc.apply({a: 30, b: 20}, [30, 20]);
myFunc.apply(num, [20, 10]);

//bind method:
var result = myFunc.bind(num);
result(10, 20);
var result2 = myFunc.bind({a: 10, b: 30}, 20, 20);
result2();

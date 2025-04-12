//Removing Object Properties:

var car = {
  brand: "BMW",
  model: "5 Series 2025",
  wheels: 4,
};
console.log(car);

car.price = "$12500";
car.engine = "8700hp";
console.log(car);

car["frontWheel"] = 2;
car['backWheel'] = 2;
console.log(car);

// console.log(car.key);

//Removing:
delete car.wheels;
console.log(car);

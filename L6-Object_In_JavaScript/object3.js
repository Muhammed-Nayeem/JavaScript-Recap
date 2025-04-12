//Setting or Updating Object Properties and Values: using Dot & Bracket Notation

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

var prop = "key";
car[prop] = "BMW Smart Key";
console.log(car);

car.model = "5i Series 2024";
car['engine'] = "10500hp";
console.log(car);

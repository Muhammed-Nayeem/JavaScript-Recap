//Properties and Methods:
//i) Properties: which is store in a variable;
// A Men: i)Name, ii)status, iii)education, iv)parents info, v)address, vi)Body Shape -> this things are properties of an object; because this things are needed to describe a men;

//ii) Methods: Which is executable and associated with an object;
//A Men: i)eat(), ii)walk(), iii)sleep(), iv)talk(), v)sing(), vi)dance() -> this things are methods of an object; because this things are executable;

//Example:
var rect = {
  //Object Properties:
  width: 20,
  height: 30,

  //Object Methods:
  calculateArea: function() {
    return this.width * this.height;
  },
  calculateRange: function() {
    return 2 * (this.width + this.height);
  },
};

var area = rect.calculateArea();
var range = rect.calculateRange();

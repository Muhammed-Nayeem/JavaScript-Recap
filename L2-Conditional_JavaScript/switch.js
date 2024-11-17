//0 - sunday, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday;

var date = new Date();
var currentDay = date.getDay();
var today = "";

switch (currentDay) {
  case 0:
    today = "Sunday";
    console.log("Today is : "+ today);
    break;

  case 1:
    today = "Monday";
    console.log("Today is : "+ today);
    break;

  case 2:
    today = "Tuesday";
    console.log("Today is : "+ today);
    break;

  case 3:
    today = "Wednesday";
    console.log("Today is : "+ today);
    break;

  case 4:
    today = "Thursday";
    console.log("Today is : "+ today);
    break;

  case 5:
    today = "Friday";
    console.log("Today is : "+ today);
    break;

  case 6:
    today = "Saturday";
    console.log("Today is : "+ today);
    break;

  default:
    console.log("Day Number is not valid!");
    break;
}

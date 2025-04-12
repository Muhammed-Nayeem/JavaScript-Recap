//Inner function or Nested function:
// function welcomeMsg(name, greet) {
//   function sayHi() {
//     console.log(name +" "+ greet);
//   }
//   sayHi();
// }
// welcomeMsg("Nayeem", "Good Morning!");


function greetMsg(name, greet) {
  function getFirstName() {
    if (name) {
      return name.split(" ")[0];
    } else {
      return "Name is not valid!";
    }
  }
  var message = greet +"! "+ getFirstName();
  return message;
}

var msg = greetMsg("Muhammed Nayeem", "Good Morning");
console.log(msg);

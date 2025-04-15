var users = [
  { firstName: "Muhammed", lastName: "Nayeem", age: 26 },
  { firstName: "Pranab", lastName: "Roy", age: 27 },
  { firstName: "Shuvo", lastName: "Paul", age: 28 },
  { firstName: "Aslam", lastName: "Ahmed", age: 26 },
  { firstName: "Asaduzzaman", lastName: "Nayeem", age: 27 },
];

//get list of fullName:
var output = users.map(function(obj) {
  return obj.firstName +" "+ obj.lastName;
});
console.log(output);

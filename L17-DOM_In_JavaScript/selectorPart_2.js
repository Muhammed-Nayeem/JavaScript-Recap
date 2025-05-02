//Selector Part Two: using querySelector & querySelectorAll;
let title = document.querySelector("#title");
console.log(title);

let paragraph = document.querySelector(".paragraph");
console.log(paragraph);

let paragraphs = document.querySelectorAll(".paragraph");
console.log(paragraphs);

let listItem = document.querySelector("li");
console.log(listItem);

let listItems = document.querySelectorAll("li");
console.log(listItems);

let itemOne = document.querySelector("[name=list-item-one]");
console.log(itemOne);

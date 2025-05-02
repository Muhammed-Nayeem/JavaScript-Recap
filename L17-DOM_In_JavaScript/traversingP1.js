//DOM Traversing part One:
let list = document.getElementById("list");

let parent = list.parentElement;
console.log(parent);

let children = list.children;
console.log(children);

let childNode = list.childNodes;
console.log(childNode);

console.log(list.previousElementSibling);
console.log(list.nextElementSibling);

console.log(list.firstElementChild);
console.log(list.lastElementChild);

let li = document.querySelector("li");
console.log(li.parentElement);

console.log(li.nextElementSibling);

let listItem = document.getElementsByTagName("li");

// let listItems = Array.from(listItem);
// let listItems = Array.prototype.slice.apply(listItem);
let listItems = [...listItem];
console.log(listItems);

listItems.forEach((li, ind) => {
  // let text = li.innerText;
  let text = li.innerHTML;
  li.innerHTML = `(${ind + 1}) ${text}`;
});

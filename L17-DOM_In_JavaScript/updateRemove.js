//Update & Remove:
let list = document.getElementById("list");

let firstChild = list.firstElementChild;
console.log(firstChild);

setTimeout(() => {
  firstChild.innerHTML = `${firstChild.innerHTML} - Modified!`;
  firstChild.style.color = "crimson";
}, 5000);

// setTimeout(() => {
//   list.lastElementChild.remove();
// }, 3000);

//cloning node:
let lastItem = list.lastElementChild.cloneNode(true);
lastItem.innerHTML = "List Item Five";
list.appendChild(lastItem);

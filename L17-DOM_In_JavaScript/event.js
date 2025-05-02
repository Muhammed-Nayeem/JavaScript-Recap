//Event listener handling:
let list = document.getElementById("list");

let addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", function (e) {
  let lastElement = list.lastElementChild.cloneNode(true);
  lastElement.innerHTML = "Newly created item";
  list.appendChild(lastElement);
});

//Event Delegation: Problem
// [...list.children].forEach((li) => {
//   li.addEventListener("click", (e) => {
//     e.target.remove();
//   });
// });

//Event Delegation: Solution
list.addEventListener("click", function (e) {
  if (this.contains(e.target)) {
    e.target.remove();
  }
});

let boxContainer = document.getElementById("box-container");
boxContainer.addEventListener("mousemove", function (e) {
  document.getElementById("x-value").innerHTML = e.offsetX;
  document.getElementById("y-value").innerHTML = e.offsetY;
  if (e.offsetX === 50 && e.offsetY) {
    alert("Both are equal");
  }
});

//Create Element:
let list = document.getElementById("list");

//create Document:
const createElement = (tagName, className, innerHTML) => {
  let element = document.createElement(tagName);
  element.className = className || "";
  element.innerHTML = innerHTML || "";
  return element;
};

//append child:
const append = (parent, childs) => {
  childs.forEach((child) => {
    parent.appendChild(child);
  });
};

let li = createElement("li", "list-item", "List Item Four");
li.setAttribute("title", "I am Four No Item");
list.appendChild(li);

let p1 = createElement( "p", "paragraph", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad labore velit iusto consequatur non quibusdam amet ab nisi, placeat aspernatur perspiciatis et eveniet consequuntur esse commodi a odit quaerat eligendi tenetur nemo distinctio impedit dolore facere praesentium? Reiciendis, sunt corrupti!");

let p2 = createElement( "p", "paragraph", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad labore velit iusto consequatur non quibusdam amet ab nisi, placeat aspernatur perspiciatis et eveniet consequuntur esse commodi a odit quaerat eligendi tenetur nemo distinctio impedit dolore facere praesentium? Reiciendis, sunt corrupti!");

let div = createElement("div");
append(div, [p1, p2]);

// let container = document.querySelector(".container");
// container.appendChild(div);

//Insert Adjacent Elements:
// list.insertAdjacentElement("beforebegin", div);
// list.insertAdjacentElement("beforeend", div);
// list.insertAdjacentElement("afterbegin", div);
list.insertAdjacentElement("afterend", div);

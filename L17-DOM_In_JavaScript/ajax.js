const base_url = "https://jsonplaceholder.typicode.com/posts";

const loadBtn = document.getElementById("load-btn");
let postList = document.getElementById("post-list");

loadBtn.addEventListener("click", function (e) {
  fetch(base_url)
    .then((res) => res.json())
    .then((postsData) => {
      postsData.forEach((post, ind) => {
        let listItem = generateElement(post, ind);
        postList.appendChild(listItem);
      });
    })
    .catch((e) => console.log(e.message));
});

function generateElement(data, num) {
  let li = document.createElement("li");
  li.innerHTML = `${num + 1}. ${data.title}`;
  return li;
}

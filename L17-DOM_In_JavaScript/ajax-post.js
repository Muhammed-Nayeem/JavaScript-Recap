let postForm = document.getElementById("post-form");
let listContainer = document.getElementById("list-container");
const base_url = "https://jsonplaceholder.typicode.com/posts";

postForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let title = this.title.value || undefined;
  let body = this.body.value || undefined;

  if (title && body) {
    let postObj = {
      userId: 100,
      title,
      body,
    };

    fetch(base_url, {
      method: "post",
      headers: {
        "Content-type": "Application/JSON",
      },
      body: JSON.stringify(postObj),
    })
      .then((res) => res.json())
      .then((post) => {
        let listItem = generateElement(post);
        listContainer.appendChild(listItem);
      })
      .catch((e) => console.log(e.message));
  } else {
    alert("Please provide every details!");
  }
});

function generateElement(item) {
  let li = document.createElement("li");
  li.innerHTML = `${item.id}. ${item.title} -by userId: ${item.userId}`;
  return li;
}

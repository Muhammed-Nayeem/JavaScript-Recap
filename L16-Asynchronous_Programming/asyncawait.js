//Async Await:
// let p = new Promise((resolve) => {
//   setTimeout(resolve, 4000, "Test Value");
// });

// async function fetchData() {
//   let res = await p;
//   console.log(res);
// }

// fetchData();

const fetchData = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    let userNames = data.map((obj) => obj.name);
    console.log(userNames);
  } catch (e) {
    console.log(e.message);
  }
};
fetchData();

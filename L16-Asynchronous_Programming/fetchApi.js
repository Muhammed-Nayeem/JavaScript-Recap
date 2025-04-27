//Implementation Of Fetch API:
const base_url = "https://jsonplaceholder.typicode.com";

// fetch(`${base_url}/users/1`)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     return Promise.resolve("Another Promise");
//   })
//   .then((str) => {
//     console.log(str);
//     return Promise.resolve("Another new promise");
//   })
//   .then((v) => {
//     console.log(v);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const getRequest = (url) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("get", url);

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response);
        } else {
          reject(new Error("Error Occurred!"));
        }
      }
    };
    xhr.send();
  });
};

getRequest(`${base_url}/users/10`)
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e.message);
  });

getRequest(`${base_url}/posts/5`)
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log(e.message);
  });

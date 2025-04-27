//What is AJAX? -> Asynchronous JavaScript and XML;
// const url = "https://jsonplaceholder.typicode.com/users";

// let xhr = new XMLHttpRequest();
// xhr.open("get", url);

// xhr.onreadystatechange = (e) => {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200) {
//       let response = JSON.parse(xhr.response);
//       console.log(response);
//     } else {
//       console.log(xhr.status);
//     }
//   }
// };
// xhr.send();

const getRequest = (url, callback) => {
  let xhr = new XMLHttpRequest();
  xhr.open("get", url);

  xhr.onreadystatechange = (e) => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        callback(null, response);
      } else {
        callback(xhr.status, null);
      }
    }
  };
  xhr.send();
};

getRequest("https://jsonplaceholder.typicode.com/users", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(res);
    let userNames = res.map((obj) => obj.name);
    console.log(userNames);
  }
});

getRequest("https://jsonplaceholder.typicode.com/posts", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(res);
    res.forEach((obj) => console.log(obj.title));
  }
});

getRequest("https://jsonplaceholder.typicode.com/comments", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    // console.log(res);
    let emails = res.map((obj) => obj.email);
    console.log(emails);
  }
});

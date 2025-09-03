// const person = {
//   name: "rabi",
//   age: 34,
//   money: 20000,
//   works: "dev",
//   family: {
//     son: "ishan",
//     girl: "ishani",
//     wife: "paromita",
//   },
// };
// // console.log(typeof people);
// console.log(person);

// // JSON : js object with notation
// // JSON.stringify ==> string;
// // JSON.parse ==> object;

// const personJSON = JSON.stringify(person);
// console.log(personJSON, typeof personJSON);

// const parseJSON = JSON.parse(personJSON);
// // console.log(parseJSON, typeof parseJSON);

// const loadData = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     // promise of response
//     .then((response) => response.json())
//     // Promise of json data
//     .then((json) => console.log(json));
// };

// const loadPost = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       displayPost(data);
//     });
// };
// const displayPost = (posts) => {
//   // 1
//   const postsContainer = document.getElementById("post-container");

//   // console.log(postsContainer);

//   posts.forEach((post) => {
//     // 2
//     const div = document.createElement("div");
//     div.innerHTML = `
//   <div class="card">
//                   <h3 class="title">${post.title}.</h3>
//                   <p class="description">${post.body}</p>
//             </div>
//   `;
//     // li.innerText = post.title;
//     // console.log(li);

//     // 3
//     postsContainer.appendChild(div);
//     // console.log(post);
//   });
// };
// loadPost();

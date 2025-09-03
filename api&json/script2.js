const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);
      displayPost(json);
    });
};
const displayPost = (posts) => {
  // 1
  //   for (let i = 0; i < posts.length; i++) {
  //     console.log(posts[i]);
  //   }
  //   2
  //   for (const post of posts) {
  //     console.log(post);
  //   }
  posts.forEach((post) => {
    //     console.log(post);
    //     1
    const container = document.getElementById("post-container");
    //     2
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card">
                  <h3 class="title">${post.title}</h3>
                  <p>${post.body}</p>
            </div>
    `;
    //     3
    container.appendChild(div);
  });
};
loadPost();

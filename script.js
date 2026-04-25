const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");
const blogList = document.getElementById("blog-list");

let postsArray = [];

function renderPosts() {
  let html = "";

  for (let post of postsArray) {
    html += `
        <div class="card w-96 bg-base-100 card-md mb-4 shadow-sm">
            <div class="card-body">
                <h2 class="card-title">${post.title}</h2>
                <p>${post.body}</p>
            </div>
        </div>
    `;
  }

  blogList.innerHTML = html;
}

async function loadPosts() {
  const response = await fetch(
    "https://apis.scrimba.com/jsonplaceholder/posts",
  );
  const data = await response.json();
  postsArray = data.slice(0, 5);

  renderPosts();
}

loadPosts();

document.getElementById("post-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    title: postTitle.value,
    body: postBody.value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((response) => response.json())
    .then((post) => {
      postsArray.unshift(post);

      renderPosts();
    });

  postTitle.value = "";
  postBody.value = "";
});

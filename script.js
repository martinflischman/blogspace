const postTitle = document.getElementById("post-title");
const postBody = document.getElementById("post-body");
const blogList = document.getElementById("blog-list");

async function postArray() {
  const response = await fetch(
    "https://apis.scrimba.com/jsonplaceholder/posts",
  );
  const data = await response.json();
  const posts = data.slice(0, 5);

  let html = "";

  for (let post of posts) {
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

postArray();

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
    .then((data) =>
      blogList.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="card w-96 bg-base-100 card-md mb-4 shadow-sm">
            <div class="card-body">
                <h2 class="card-title">${data.title}</h2>
                <p>${data.body}</p>
            </div>
        </div>
    `,
      ),
    );

  postTitle.value = "";
  postBody.value = "";
});

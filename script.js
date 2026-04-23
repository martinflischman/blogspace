const postForm = document.getElementById("post-form");

postForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("post-title").value;
  const body = document.getElementById("post-body").value;

  const post = {
    title: title,
    body: body,
  };

  console.log(post);
});

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

  document.getElementById("blog-list").innerHTML = html;
}

postArray();

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

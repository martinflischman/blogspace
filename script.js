async function postArray() {
  const response = await fetch(
    "https://apis.scrimba.com/jsonplaceholder/posts",
  );
  const data = await response.json();
  const posts = data.slice(0, 5);

  let html = "";

  for (let post of posts) {
    html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr />
        `;
  }

  document.getElementById("blog-list").innerHTML = html;
}

postArray();

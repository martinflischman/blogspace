const postsContainer = document.getElementById("posts");

async function postArray() {
  const response = await fetch(
    "https://apis.scrimba.com/jsonplaceholder/posts",
  );
  const data = await response.json();
  const posts = data.slice(0, 5);

  posts.forEach((post) => {
    const postTitle = `<h2>${post.title}</h2>`;
    const postBody = `<p>${post.body}</p>`;
    postsContainer.innerHTML += `${postTitle}${postBody}`;
  });
}

postArray();

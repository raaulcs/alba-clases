document.addEventListener("DOMContentLoaded", () => {
  const blogContainer = document.getElementById("blog-posts");

  fetch("posts/blog-posts.json")
    .then((response) => response.json())
    .then((posts) => {
      if (posts.length > 0) {
        posts.forEach((post) => {
          const postElement = document.createElement("article");
          postElement.classList.add("blog-post");
          postElement.innerHTML = `
                      <h3>${post.title}</h3>
                      <p><small>${new Date(
                        post.date
                      ).toLocaleDateString()}</small></p>
                      <p>${post.content}</p>
                      <a href="${post.link}" class="read-more">Leer más</a>
                  `;
          blogContainer.appendChild(postElement);
        });
      } else {
        blogContainer.innerHTML = "<p>No hay publicaciones todavía.</p>";
      }
    })
    .catch((error) => {
      console.error("Error al cargar las publicaciones:", error);
      blogContainer.innerHTML =
        "<p>Hubo un problema al cargar las publicaciones.</p>";
    });
});

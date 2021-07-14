export async function getListArticleApi() {
  return fetch("https://5f55a98f39221c00167fb11a.mockapi.io/blogs")
    .then((response) => response.json())
    .then((data) => data);
}

export async function getArticleDetailApi(id) {
  return fetch(`https://5f55a98f39221c00167fb11a.mockapi.io/blogs/${id}`)
    .then((response) => response.json())
    .then((data) => data);
}

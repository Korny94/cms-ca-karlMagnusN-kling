const movieDiv = document.querySelector("#movieDiv");

const movieTitle = document.querySelector("#movieTitle");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const urlKeyId =
  "http://localhost/square-eyes/wordpress/wp-json/wc/store/products/" + id;

console.log(urlKeyId);

async function fetchMovie() {
  try {
    const response = await fetch(urlKeyId);
    const json = await response.json();

    console.log(json);

    movieDiv.classList.remove("loading");

    movieTitle.innerHTML = json.name;

    createMovieHtml(json);
  } catch (err) {
    console.log(err);
    movieDiv.classList.remove("loading");
    movieDiv.classList.add("error");
    movieDiv.innerHTML = "There was an error!";
  }
}

fetchMovie();

function createMovieHtml(json) {
  movieDiv.innerHTML = `
    <div class="movieDetails">
        <h1 class="h1Details">${json.name}</h1>
        <div class="movieDetailBg" style="background-image: url(${json.images[0].src})"></div>
        <h2>Price: <span>${json.price_html}</span></h2>
        <h3><span class="bold">Description</span>: ${json.description}</h3>
    </div>
`;
}

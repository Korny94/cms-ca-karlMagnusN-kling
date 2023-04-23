const featured = document.querySelector("#featured");
const allMovies = document.querySelector("#allMovies");

const moviesDiv = document.querySelector("#moviesDiv");

let featuredCount = 0;

async function fetchMovies() {
  try {
    const response = await fetch(
      "http://localhost/square-eyes/wordpress/wp-json/wc/store/products"
    );
    const json = await response.json();

    console.log(json);

    moviesDiv.classList.remove("loading");

    featured.onclick = function filterFeatured() {
      featuredCount++;
      if (featuredCount % 2 == 1) {
        featured.innerHTML = "All Movies";
        allMovies.innerHTML = "Featured Movies";
        moviesDiv.innerHTML = `
        <a href="/details.html?id=${json[0].id}" class="movieCard">
            <div class="movieBg" style="background-image: url(${json[0].images[0].src})">
            </div>
            <div class="movieName">
                ${json[0].name}
            </div>
        </a>

    `;
      } else {
        location.reload();
      }
    };

    json.forEach(function (movie) {
      moviesDiv.innerHTML += `
              <a href="/details.html?id=${movie.id}" class="movieCard">
                  <div class="movieBg" style="background-image: url(${movie.images[0].src})">
                  </div>
                  <div class="movieName">
                      ${movie.name}
                  </div>
              </a>
          `;
    });
  } catch (err) {
    moviesDiv.classList.remove("loading");
    moviesDiv.classList.add("error");
    moviesDiv.innerHTML = "There was an error!";
  }
}

fetchMovies();

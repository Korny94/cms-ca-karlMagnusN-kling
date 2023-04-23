// const body = document.querySelector("body");

// async function getShop() {
//   try {
//     const url =
//       "http://localhost/square-eyes/wordpress/wp-json/wc/store/products"; // Storing the API in a variable

//     const response = await fetch(url); // Set the "mode" option to "no-cors" to disable CORS

//     const json = await response.json(); // Make a promise, with await = now you get the data that is being returned from the API call

//     console.log(json); // ALWAYS LOG json TO FIND THE PROPERTIES YOU WANT TO FETCH
//   } catch (error) {
//     console.log("There was an error:", error);
//   }
// }

// getShop();

// // async function getAddams() {
// //   try {
// //     const url =
// //       "http://localhost/square-eyes/wordpress/wp-json/wc/v3/products/43?consumer_secret=ck_cs_3ccb58d493ba282cdd7daea7b42f81f0b8785f0c"; // Storing the API in a variable

// //     const response = await fetch(url, { mode: "no-cors" }); // Set the "mode" option to "no-cors" to disable CORS

// //     const json = response; // Make a promise, with await = now you get the data that is being returned from the API call

// //     const text = await response.text(); // Make a promise, with await = now you get the data that is being returned from the API call

// //     body.innerHTML = text; // Set the innerHTML of the body to the text

// //     console.log(json); // ALWAYS LOG json TO FIND THE PROPERTIES YOU WANT TO FETCH
// //   } catch (error) {
// //     console.log("There was an error:", error);
// //   }
// // }

// // getAddams();

const featured = document.querySelector("#featured");

const moviesDiv = document.querySelector("#moviesDiv");

async function fetchMovies() {
  try {
    const response = await fetch(
      "http://localhost/square-eyes/wordpress/wp-json/wc/store/products"
    );
    const json = await response.json();

    console.log(json);

    moviesDiv.classList.remove("loading");

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

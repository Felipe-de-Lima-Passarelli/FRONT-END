//Actual Page (1 - 500)
const numberPage = document.getElementById("page-number");
let actualPage = 1;

//Card Movie
const cardMovie = document.getElementsByClassName("cards-grid")[0];

//Title Movie
const titleMovie = document.getElementById("title");

async function fetchMovie(page) {
  cardMovie.innerHTML = "";
  titleMovie.innerHTML = "Loading...";
  numberPage.innerHTML = "Loading...";
  let cardsHTML = "";
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=476f7b035e2d96e41911d624fa6551e3&with_genres=36&language=pt-BR&page=${page}`;

  const response = await fetch(url);
  const data = await response.json();
  const movies = data.results;

  movies.forEach((movie) => {
    cardsHTML += `
  <div class="card">
    <img src="${
      movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "https://placehold.co/500x750?text=Imagem+Não+Disponível"
    }" alt="${movie.title}" />


    <div class="card-info">
      <h2>${movie.title}</h2>
      <p>Linguagem: ${movie.original_language.toUpperCase()}</p>
      <p>Lançamento: ${
        movie.release_date
          ? movie.release_date.split("-").reverse().join("/")
          : "Data não disponível"
      }</p>

      <p>Nota: ${movie.vote_average.toFixed(2)}</p>
    </div>
  </div>
`;
  });

  //Atualizando DOM com os filmes
  titleMovie.innerHTML = "Filmes de História";
  cardMovie.innerHTML = cardsHTML;
  numberPage.innerHTML = actualPage;
}

//Botões
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const first = document.getElementById("first");
const last = document.getElementById("last");

//Função para trocar de página
function newPage(action) {
  if (action === "next") {
    if (actualPage < 500) {
      actualPage++;
      fetchMovie(actualPage);
    }
  }

  if (action === "prev") {
    if (actualPage > 1) {
      actualPage--;
      fetchMovie(actualPage);
    }
  }

  if (action === "first") {
    actualPage = 1;
    fetchMovie(actualPage);
  }

  if (action === "last") {
    actualPage = 500;
    fetchMovie(actualPage);
  }
}

next.addEventListener("click", () => newPage("next"));
prev.addEventListener("click", () => newPage("prev"));
first.addEventListener("click", () => newPage("first"));
last.addEventListener("click", () => newPage("last"));

//Inicializando com a página 1 de filmes de ação
fetchMovie(actualPage);

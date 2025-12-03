//Cards
const cards = document.querySelector(".cards-grid");

//Status
let status_life;

// Botões
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const pageNumber = document.getElementById("page-number");
const firstBtn = document.getElementById("first");
const lastBtn = document.getElementById("last");

let currentPage = 1;
const totalPages = 42;

// Função para buscar página específica
async function getCharactersByPage(page) {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`;
  const response = await fetch(url);
  const data = await response.json();

  return data.results;
}

// Renderização da página atual
async function renderPage(page) {
  cards.innerHTML = ""; // limpa os cards, mantendo 20 por página

  const characters = await getCharactersByPage(page);

  characters.forEach((character) => {
    cards.innerHTML += `
      <div class="card">
        <img src="${character.image}" alt="${character.name}" />
        <div class="card-info">
          <h2>${character.name}</h2>
          <p>Species: ${character.species}</p>
          <p>Gender: ${character.gender}</p>
          <span class="status">${character.status}</span>
        </div>
      </div>
    `;
  });

  status_life = document.getElementsByClassName("status");

  // For para aplicar o status_life
  for (let i = 0; i < status_life.length; i++) {
    const text = status_life[i].innerHTML;

    if (text === "Alive") {
      status_life[i].classList.add("alive");
    } else if (text === "Dead") {
      status_life[i].classList.add("dead");
    } else {
      status_life[i].classList.add("unknown");
    }
  }

  // Atualiza número da página
  pageNumber.innerText = page;
}

// Botões
nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    renderPage(currentPage);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage(currentPage);
  }
});

firstBtn.addEventListener("click", () => {
  currentPage = 1;
  renderPage(currentPage);
});

lastBtn.addEventListener("click", () => {
  currentPage = totalPages;
  renderPage(currentPage);
});

//Pagina inicial
renderPage(1);

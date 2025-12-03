//Card Grid
const card_grid = document.getElementsByClassName("cards-grid")[0];

//Actual page
const actual_page = document.getElementById("page-number");
let default_page = 1;

//Actual title
const actual_title = document.getElementById("title");

//Botões
const firstButton = document.getElementById("first");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const lastButton = document.getElementById("last");

const pages = [
  { id: 1, race: "Aqua" },
  { id: 2, race: "Beast" },
  { id: 3, race: "Beast-Warrior" },
  { id: 4, race: "Creator-God" },
  { id: 5, race: "Cyberse" },
  { id: 6, race: "Dinosaur" },
  { id: 7, race: "Divine-Beast" },
  { id: 8, race: "Dragon" },
  { id: 9, race: "Fairy" },
  { id: 10, race: "Fiend" },
  { id: 11, race: "Fish" },
  { id: 12, race: "Insect" },
  { id: 13, race: "Machine" },
  { id: 14, race: "Plant" },
  { id: 15, race: "Psychic" },
  { id: 16, race: "Pyro" },
  { id: 17, race: "Reptile" },
  { id: 18, race: "Rock" },
  { id: 19, race: "Sea%20Serpent" },
  { id: 20, race: "Spellcaster" },
  { id: 21, race: "Thunder" },
  { id: 22, race: "Warrior" },
  { id: 23, race: "Winged%20Beast" },
  { id: 24, race: "Wyrm" },
  { id: 25, race: "Zombie" },
];

async function raceCard(page) {
  card_grid.innerHTML = `<p>Carregando cartas...</p>`;
  actual_page.innerHTML = "Loading...";
  actual_title.innerHTML = `
  Yu-Gi-Oh Cards
  <br />
  Race: Loading...
`;
  const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?race=${
    pages[page - 1].race
  }`;
  const response = await fetch(url);
  const data = await response.json();
  const title = 2;
  actual_title.innerHTML = `
  Yu-Gi-Oh Cards
  <br />
  Race: ${data.data[0].race}
`;

  //Percorrer todas cartas da raça atual
  let cardsHTML = "";
  data.data.forEach((card) => {
    cardsHTML += `
    <div class="card">
      <img src="${card.card_images[0].image_url}" alt="${card.name}" />
      <div class="card-info">
        <h2>${card.name}</h2>
        <p>Type: ${card.type}</p>
        <p>Race: ${card.race}</p>
        <p>ATK: ${card.atk} | DEF: ${card.def}</p>
      </div>
    </div>
  `;
  });

  //Atualizando o DOM com as cards
  card_grid.innerHTML = cardsHTML;

  //Atualizando o numerador da página
  actual_page.innerHTML = page;
}

function newPage(action) {
  if (action === "next") {
    if (default_page < 25) {
      default_page++;
      raceCard(default_page);
    }
  }

  if (action === "prev") {
    if (default_page > 1) {
      default_page--;
      raceCard(default_page);
    }
  }

  if (action === "first") {
    default_page = 1;
    raceCard(default_page);
  }

  if (action === "last") {
    default_page = 25;
    raceCard(default_page);
  }
}

//Eventos dos botões para atualizar a pagina atual
nextButton.addEventListener("click", () => newPage("next"));
prevButton.addEventListener("click", () => newPage("prev"));
firstButton.addEventListener("click", () => newPage("first"));
lastButton.addEventListener("click", () => newPage("last"));

//Pagina inicial
raceCard(1);

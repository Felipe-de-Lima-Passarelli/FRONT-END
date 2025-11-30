// Inputs e variável para trocar o Pokemon
let id = 1;

const actual_pokemon = document.getElementsByClassName("actual_pokemon")[0];

const number_pokemon = document.getElementsByClassName("number_pokemon")[0];

const name_pokemon = document.getElementsByClassName("name_pokemon")[0];

const form_pokemon = document.getElementsByClassName("form_pokemon")[0];

const search_pokemon = document.getElementById("search_pokemon");

const prev = document.getElementsByClassName("prev")[0];
const next = document.getElementsByClassName("next")[0];

async function requestPokemon(pokemon) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

//Função para trocar de pokemon no form
async function newPokemon(e) {
  e.preventDefault();
  const search = search_pokemon.value.toLowerCase();
  if (search > 649 || search < 1) return;
  id = search;
  const newPokemon = await requestPokemon(search);
  actual_pokemon.src =
    newPokemon.sprites.versions["generation-v"][
      "black-white"
    ].animated.front_default;
  number_pokemon.innerHTML = `${newPokemon.id} - `;
  name_pokemon.innerHTML = newPokemon.name;
}

//Função para trocar de pokemon nos botões
async function next_prev(e) {
  if (e.target.innerHTML === "Prev &lt;") {
    if (id === 1) return;
    id--;
    const newPokemon = await requestPokemon(id);
    actual_pokemon.src =
      newPokemon.sprites.versions["generation-v"][
        "black-white"
      ].animated.front_default;
    number_pokemon.innerHTML = `${newPokemon.id} - `;
    name_pokemon.innerHTML = newPokemon.name;
  } else {
    if (id === 649) return;
    id++;
    const newPokemon = await requestPokemon(id);
    actual_pokemon.src =
      newPokemon.sprites.versions["generation-v"][
        "black-white"
      ].animated.front_default;
    number_pokemon.innerHTML = `${newPokemon.id} - `;
    name_pokemon.innerHTML = newPokemon.name;
  }
}

//Adicionando o evento ao form
form_pokemon.addEventListener("submit", newPokemon);

//Adicionando o evento ao botão
prev.addEventListener("click", next_prev);
next.addEventListener("click", next_prev);

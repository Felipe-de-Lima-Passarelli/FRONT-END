// Crie um objeto com informações de um livro: título, autor, ano, editora. Use for...in para exibir todas as propriedades e seus valores.

const livro = {
  título: "Valorant",
  autor: "Riot Games",
  ano: 2020,
  editora: "Riot Games",
};

let contagem = 0;
for (let propriedade in livro) {
  console.log(`${propriedade}: ${livro[propriedade]}`);
  contagem++;
}

// Conte quantas propriedades o objeto possui.
console.log(contagem);

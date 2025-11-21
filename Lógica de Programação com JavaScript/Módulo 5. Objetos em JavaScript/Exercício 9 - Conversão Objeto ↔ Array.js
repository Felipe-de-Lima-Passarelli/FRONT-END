// Crie um objeto com 3 propriedades. Converta o objeto em um array de pares chave/valor usando Object.entries(). Exiba o array.

const livro = {
  nome: "Valorant",
  autor: "Riot Games",
  ano: 2020,
};

const livroArray = Object.entries(livro);
console.log(livroArray);

// Reconstrua o objeto original usando Object.fromEntries().

const livroObjeto = Object.fromEntries(livroArray);
console.log(livroObjeto);

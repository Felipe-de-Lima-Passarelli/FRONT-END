// Crie um array chamado produtos, contendo 3 objetos com as propriedades: nome e preco. Percorra o array e exiba o nome e o preço de cada produto. Calcule o valor total da soma de todos os produtos.

const produtos = [
  {
    nome: "Mouse Gamer",
    preco: 175.0,
  },
  {
    nome: "Teclado Gamer",
    preco: 260.0,
  },
  {
    nome: "Headset Gamer",
    preco: 600.0,
  },
];

let soma = 0;

for (let produto of produtos) {
  console.log(produto);
  soma += produto.preco;
}

console.log(soma);

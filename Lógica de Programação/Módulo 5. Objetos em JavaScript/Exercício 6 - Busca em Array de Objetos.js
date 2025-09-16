// Usando o array produtos do exercício anterior, faça uma função que receba o nome de um produto e retorne o objeto completo, se existir. Se não existir, retorne uma mensagem: "Produto não encontrado."

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

function verificarProduto(nome) {
  for (let produto of produtos) {
    if (produto.nome.toLowerCase() === nome.toLowerCase()) {
      return produto;
    }
  }
  return "Produto não encontrado";
}

console.log(verificarProduto("Mouse Gamer"));

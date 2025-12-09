//1. Tratamento de Erros

/*
    try -> Tenta realizar o objetivo
    catch -> Captura possíveis erros
    throw -> Lançar erro manualmente
    finally -> Sempre executa
*/

//Erro na declaração do nome da propriedade (nom)
const produto = {
  nom: "Notebook",
  preco: 1200,
};

function tratarErro(error) {
  console.log(`Erro: ${error.message}`);
}

function contarQuantidadeLetras(product) {
  try {
    console.log(product.nome.length);
  } catch (error) {
    tratarErro(error);
  } finally {
    console.log("Sempre passa por aqui ao final");
  }
}

contarQuantidadeLetras(produto);

//2. Funções Factory (Retornam um objeto)

const ProdutoFactory = function (nome, preco) {
  return {
    nome,
    preco,
  };
};

const produto1 = ProdutoFactory("Notebook", 1500);
console.log(produto1);

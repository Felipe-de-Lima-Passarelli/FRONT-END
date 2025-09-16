// Crie uma função async chamada obterMensagem que retorna a string "Mensagem assíncrona". Chame essa função e exiba o resultado.

async function obterMensagem() {
  return "Mensagem assíncrona";
}

obterMensagem().then((resposta) => console.log(resposta));

// Mostre como essa função retorna automaticamente uma Promise.

console.log(obterMensagem());

// Crie uma função chamada verificarNumero que recebe um número e retorna uma Promise: Se o número for par, resolve com a mensagem "Número par". Se for ímpar, rejeita com "Número ímpar". Use .then() e .catch() para tratar os casos.

function verificarNumero(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (numero % 2 === 0) {
        resolve(`Número par: ${numero}`);
      } else {
        reject(`Número impar: ${numero}`);
      }
    }, 2000);
  });
}

verificarNumero(10)
  .then((resposta) => console.log(resposta))
  .catch((error) => console.log(error));

// Tente com diferentes números e exiba os resultados.

verificarNumero(1)
  .then((resposta) => console.log(resposta))
  .catch((error) => console.log(error));

verificarNumero(2)
  .then((resposta) => console.log(resposta))
  .catch((error) => console.log(error));

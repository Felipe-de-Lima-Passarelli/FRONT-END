// Crie uma Promise que resolve com um número após 1 segundo. Depois, use .then() para: Multiplicar esse número por 2, Somar 10 ao resultado e exibir o valor final no console

function minhaPromise(numero) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numero);
    }, 1000);
  });
}

minhaPromise(10)
  .then((resposta) => resposta * 2)
  .then((resultadoNovo) => resultadoNovo + 10)
  .then((final) => console.log(final));

// Use valores diferentes para testar o fluxo.

minhaPromise(20)
  .then((resposta) => resposta * 2)
  .then((resultadoNovo) => resultadoNovo + 10)
  .then((final) => console.log(final));

minhaPromise(30)
  .then((resposta) => resposta * 2)
  .then((resultadoNovo) => resultadoNovo + 10)
  .then((final) => console.log(final));

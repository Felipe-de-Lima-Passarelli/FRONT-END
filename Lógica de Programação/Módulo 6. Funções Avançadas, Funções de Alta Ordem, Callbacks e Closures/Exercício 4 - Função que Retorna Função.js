// Crie uma função chamada multiplicador que receba um número x e retorne uma nova função. Essa nova função deve receber outro número y e retornar o produto de x por y.

function multiplicador(x) {
  return function (y) {
    return x * y;
  };
}

// Use a função para criar multiplicaPor3 e chame multiplicaPor3(10).

const multiplicaPor3 = multiplicador(3);
console.log(multiplicaPor3(10));

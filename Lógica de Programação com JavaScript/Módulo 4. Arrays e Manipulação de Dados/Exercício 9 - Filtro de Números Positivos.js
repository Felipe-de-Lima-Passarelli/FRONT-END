// Crie um array com números positivos e negativos. Gere um novo array apenas com os números positivos.

const numeros = [5, -4, 23, 230, 2, -1, 40, -12, -30];
const numerosPositivos = numeros.filter((numero) => numero > 0);
console.log(numerosPositivos);

// Conte quantos negativos foram removidos.
console.log(numeros.length - numerosPositivos.length);

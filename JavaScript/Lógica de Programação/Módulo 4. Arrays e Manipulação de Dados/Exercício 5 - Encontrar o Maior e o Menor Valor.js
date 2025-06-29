// Crie um array de números e descubra qual o maior e o menor valor presente nele.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const maxNumero = Math.max(...numeros);
const minNumero = Math.min(...numeros);
console.log(maxNumero);
console.log(minNumero);

// Mostre também a posição (índice) desses valores no array.

console.log(numeros.indexOf(maxNumero));
console.log(numeros.indexOf(minNumero));

// Crie um array de números e calcule a soma total dos seus elementos.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const somaNumeros = numeros.reduce(
  (acumulador, numero) => acumulador + numero,
  0
);
console.log(somaNumeros);

// Calcule também a média aritmética dos números do array.

const media = somaNumeros / numeros.length;
console.log(media.toFixed(2));

// Crie um array com 10 números. Mostre a quantidade de elementos com .length. Percorra o array com um for e exiba cada número

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeros.length);

for (numero of numeros) {
  console.log(numero);
}

// Exiba apenas os números pares do array.

for (numero of numeros) {
  if (numero % 2 === 0) {
    console.log(numero);
  }
}

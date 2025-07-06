// Crie um array de números. Use .forEach() para exibir cada número multiplicado por 2.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.forEach((numero) => {
  console.log(numero * 2);
});

// Use .map() para criar um novo array com cada número ao quadrado.

const numerosquadrado = numeros.map((numero) => numero ** 2);
console.log(numerosquadrado);

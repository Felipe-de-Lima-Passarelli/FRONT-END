// Crie um array com 5 números. Mostre esse array na ordem inversa.

const numeros1 = [1, 2, 3, 4, 5];
console.log(numeros1.reverse());

// Agora faça sem utilizar o .reverse().

const numeros2 = [1, 2, 3, 4, 5];
let numerosInvertido = [];

for (let i = 0; i <= numeros2.length - 1; i++) {
  numerosInvertido.push(numeros2[4 - i]);
}

console.log(numerosInvertido);

// Peça uma lista de números e exiba o array invertido.

const listaNumeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(listaNumeros1.reverse());

// Implemente a inversão sem usar .reverse().

const listaNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const listaNumerosInvertida = [];

for (let i = listaNumeros2.length - 1; i >= 0; i--) {
  listaNumerosInvertida.push(listaNumeros2[i]);
}

console.log(listaNumerosInvertida);

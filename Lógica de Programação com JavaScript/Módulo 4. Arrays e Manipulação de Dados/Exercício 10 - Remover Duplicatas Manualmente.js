// Crie um array com valores repetidos (ex.: [1, 2, 2, 3, 4, 4, 5]). Monte um novo array sem duplicatas (sem usar Set).

const numeros = [1, 2, 2, 3, 4, 4, 5];
const novoNumeros = [];
let repeticao = 0;

for (num of numeros) {
  if (!novoNumeros.includes(num)) {
    novoNumeros.push(num);
  } else {
    repeticao++;
  }
}

console.log(novoNumeros);

// Mostre quantos elementos repetidos foram eliminados.

console.log(repeticao);

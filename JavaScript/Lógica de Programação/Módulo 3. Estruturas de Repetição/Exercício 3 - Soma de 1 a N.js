// Peça ao usuário um número N e calcule a soma de todos os números de 1 até N.

let N = 15;
let acumulador = 0;

for (let i = 1; i <= N; i++) {
  acumulador += i;
}

console.log(acumulador);

// Mostre também a média desses números.

const media = acumulador / N;
console.log(media);

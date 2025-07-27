// Peça um número N e calcule o fatorial de N (ex: 5! = 5×4×3×2×1).

const N = 5;

function fatorar(numero) {
  if (numero === 1) return numero;
  return numero * fatorar(numero - 1);
}

console.log(fatorar(N));

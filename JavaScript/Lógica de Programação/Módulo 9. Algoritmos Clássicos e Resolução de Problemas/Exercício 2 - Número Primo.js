// Peça um número e verifique se ele é primo. Mostre todos os divisores, caso não seja primo.

const N = 100;
let primo = true;
let divisores = [1];

if (N === 1) {
  primo = false;
} else {
  let contador = 1;
  for (let i = 2; i <= N; i++) {
    if (N % i === 0) {
      contador += 1;
      divisores.push(i);
    }
  }
}

if (divisores.length > 2) {
  primo = false;
}

console.log(
  primo
    ? "O número é primo"
    : `O número não é primo, e seus divisores são ${divisores}`
);

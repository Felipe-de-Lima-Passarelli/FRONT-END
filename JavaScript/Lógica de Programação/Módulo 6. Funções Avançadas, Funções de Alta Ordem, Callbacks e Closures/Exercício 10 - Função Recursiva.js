// Crie uma função recursiva que calcule o fatorial de um número. Adapte para retornar 1 se o número for zero ou negativo.

function fatorial(num) {
  if (num < 1) return 1;
  if (num === 1) return num;
  return num * fatorial(num - 1);
}

console.log(fatorial(-1));
console.log(fatorial(0));
console.log(fatorial(1));
console.log(fatorial(2));
console.log(fatorial(3));
console.log(fatorial(4));
console.log(fatorial(5));

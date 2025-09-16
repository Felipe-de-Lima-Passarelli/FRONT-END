// Peça um número N e mostre a sequência de Fibonacci até que o próximo número ultrapasse N.

const N = 100;
const fibonacci = [0, 1];

while (fibonacci[fibonacci.length - 1] < N) {
  const proximoNumero =
    fibonacci[fibonacci.length - 2] + fibonacci[fibonacci.length - 1];
  if (proximoNumero > N) break;
  fibonacci.push(proximoNumero);
}

console.log(fibonacci);

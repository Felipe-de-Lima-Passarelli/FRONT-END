// Crie um programa que recebe um número e informa se ele é par ou ímpar.

let number = 8;

if (number % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é impar");
}

// Adapte para permitir que o usuário verifique vários números de uma vez (pode ser um array ou vários prompts, se quiser).

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (index in numbers) {
  if (numbers[index] % 2 !== 0) {
    console.log("O número é impar");
  } else {
    console.log("O número é par");
  }
}

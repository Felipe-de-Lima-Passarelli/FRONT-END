// Peça três números e informe qual é o maior deles.

let number1 = 13;
let number2 = 2;
let number3 = 13;

const numberArray = [number1, number2, number3];
console.log(Math.max(...numberArray));

// Se houver números iguais, indique também essa situação (ex.: "Dois números são iguais e maiores").

let maxNumber = Math.max(...numberArray);
const quantidade = numberArray.filter((item) => item === maxNumber).length;
if (quantidade > 1) {
  console.log(`O maior número repete ${quantidade} vezes`);
}

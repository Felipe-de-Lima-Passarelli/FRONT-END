// Crie um programa que calcule o IMC de uma pessoa. Fórmula: IMC = peso / (altura * altura). Use variáveis para peso (em kg) e altura (em metros). Exiba o resultado.

let peso = 76;
let altura = 1.88;
const imc = (peso / altura ** 2).toFixed(2);
console.log(imc);

// Exiba também a classificação do IMC com base no valor: Menor que 18.5 → Abaixo do peso / Entre 18.5 e 24.9 → Peso normal / Entre 25 e 29.9 → Sobrepeso / Maior ou igual a 30 → Obesidade

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc <= 24.9) {
  console.log("Peso normal");
} else if (imc <= 29.9) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}

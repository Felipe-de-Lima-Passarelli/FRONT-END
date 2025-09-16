// Crie um programa que calcule o salário mensal de uma pessoa com base nas seguintes informações: Valor da hora trabalhada (valorHora) e Quantidade de horas trabalhadas no mês (horasTrabalhadas)

let valorHora = 60;
let horasTrabalhadas = 6 * 31;
const salarioTotal = valorHora * horasTrabalhadas;
console.log(salarioTotal);

// Aplique um desconto de 8% referente ao INSS e mostre o salário líquido.

console.log(0.92 * salarioTotal);

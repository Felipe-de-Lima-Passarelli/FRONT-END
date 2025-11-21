// Crie um programa que receba uma idade em anos e converta para dias (desconsidere anos bissextos e considere mês = 31 dias / 4 semanas).

let idade = 25;
const diasIdade = idade * 12 * 31;
console.log(diasIdade);

// Adapte para calcular também a idade em meses e semanas.

const mesesIdade = idade * 12;
const semanasIdade = mesesIdade / 4;
console.log(mesesIdade);
console.log(semanasIdade);

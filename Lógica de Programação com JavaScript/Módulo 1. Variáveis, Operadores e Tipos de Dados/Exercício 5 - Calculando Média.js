// Crie um programa que calcule a média de três notas armazenadas em três variáveis (nota1, nota2, nota3) e exiba o resultado.

const nota1 = 8;
const nota2 = 5;
const nota3 = 2;
const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
console.log(media);

// Mostre uma mensagem dizendo se o aluno está aprovado (média maior ou igual a 6) ou reprovado.

if (media >= 6) {
  console.log("Aluno aprovado");
} else {
  console.log("Aluno reprovado");
}

// Crie um objeto aluno com: nome, notas (array de 3 números)e método calcularMedia que retorna a média das notas. Exiba o nome e a média. Adapte o método para retornar também a situação: Aprovado (média ≥6) ou Reprovado.

const aluno = {
  nome: "Felipe",
  notas: [7, 9, 5],

  calcularMedia() {
    const media =
      this.notas.reduce((acumulador, nota) => (acumulador += nota), 0) /
      this.notas.length;
    return media.toFixed(2);
  },
};

let situacao = "";
if (aluno.calcularMedia() >= 6) {
  situacao = "Aprovado";
} else {
  situacao = "Reprovado";
}

console.log(aluno.nome);
console.log(aluno.calcularMedia() + " ----> " + situacao);

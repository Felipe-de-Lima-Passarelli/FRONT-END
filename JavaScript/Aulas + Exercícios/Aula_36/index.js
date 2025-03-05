//Factory Function (Função Fábrica)
function criaObjetoPessoa(nome, sobrenome, peso) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    peso: peso,

    fala(assunto) {
      return `${this.nome} ${this.sobrenome}, que pesa ${this.peso} kg, está falando sobre ${assunto}`;
    },
  };
}

pessoa1 = criaObjetoPessoa("Felipe", "de Lima Passarelli", 68);
console.log(pessoa1);
console.log(pessoa1.fala("JavaScript"));

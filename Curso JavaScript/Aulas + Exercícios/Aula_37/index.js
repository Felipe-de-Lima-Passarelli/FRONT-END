// Função Construtura

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.falaOi = function () {
    console.log(`${this.nome} está dizendo: Olá`);
  };
}

pessoa1 = new Pessoa("Felipe", "de Lima Passarelli");
console.log(pessoa1);
pessoa1.falaOi();

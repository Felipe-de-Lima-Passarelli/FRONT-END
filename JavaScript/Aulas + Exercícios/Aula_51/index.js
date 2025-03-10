class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando.`);
  }
}

const p1 = new Pessoa("Luiz", "Miranda");
console.log(p1);
p1.falar();

class Adulto extends Pessoa {
  constructor(nome, sobrenome, profissao) {
    super(nome, sobrenome);
    this.profissao = profissao;
  }

  nomeCompleto() {
    console.log(`${this.nome} ${this.sobrenome}`);
  }
}

const p2 = new Adulto("Felipe", "de Lima Passarelli", "Programador");
console.log(p2);
p2.nomeCompleto();
console.log(p2["profissao"]);
p2.falar();

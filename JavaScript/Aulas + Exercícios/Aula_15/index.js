const pessoa1 = {
  nome: "Felipe",
  idade: 24,

  fala() {
    console.log(
      `${this.nome}, com a idade de ${this.idade} está falando oi...`
    );
  },

  incrementaIdade() {
    this.idade++;
  },
};

function criaPessoa(nome, idade) {
  return {
    nome: nome, //Como são os mesmos nomes, apenas um lado já da
    idade,
  };
}

const pessoa2 = criaPessoa("Patricia", 30);

console.log(pessoa1);
console.log(pessoa2);
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

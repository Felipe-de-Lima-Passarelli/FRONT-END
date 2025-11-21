function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

//Para não criar um método nomeCompleto em cada pessoa instanciada,
//utilizamos o .prototype, para criar o método
//apenas uma vez, economizando memória
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

const pessoa1 = new Pessoa("Luiz", "Otávio");
const pessoa2 = new Pessoa("Ana", "Maria");

console.log(pessoa1);
console.log(pessoa2);

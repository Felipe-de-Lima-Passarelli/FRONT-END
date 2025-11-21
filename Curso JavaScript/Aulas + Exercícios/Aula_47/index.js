function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

const p1 = new Pessoa("Luiz", " Miranda");
Object.freeze(p1);
p1.nome = "Outra coisa"; //O método freeze não permite mudar o valor
console.log(p1); //Continuará sendo "Luiz" o nome

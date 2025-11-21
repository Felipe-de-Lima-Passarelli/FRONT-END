const nome = "Luiz";
const sobrenome = "Miranda";

const falaNome = () => {
  console.log(nome, sobrenome);
};

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = "O que eu quiser exportar";

//Para importar, basta usar require
// const mod1 = require()

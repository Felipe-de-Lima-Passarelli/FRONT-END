const anoAtual = new Date().getFullYear();
const mesAtual = new Date().getMonth();

const nome = "Felipe";
const sobrenome = "de Lima Passarelli";
const idade = 24;
const peso = 68;
const altura = 1.9;
let imc = peso / altura ** 2;
let anoNascimento;

if (mesAtual <= 3) {
  anoNascimento = anoAtual - 1 - idade;
} else {
  anoNascimento = anoAtual - (idade + (mesAtual - 3));
}

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc.toFixed(3)}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);

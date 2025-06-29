// Crie um array com nomes de alunos. Peça ao usuário um nome e diga se ele está presente ou não no array.

const alunos = ["Felipe", "João", "Victor", "Milena"];
const nomeDigitado = prompt(
  "Digite um nome para ver se está na lista de alunos"
);

let alunoPresente = false;

if (alunos.includes(nomeDigitado)) {
  alert("Este nome está presente");
  alunoPresente = true;
} else {
  alert("Nome não encontrado");
}

// Se estiver presente, mostre também a posição (índice) do nome.

if (alunoPresente) alert(alunos.indexOf(nomeDigitado));

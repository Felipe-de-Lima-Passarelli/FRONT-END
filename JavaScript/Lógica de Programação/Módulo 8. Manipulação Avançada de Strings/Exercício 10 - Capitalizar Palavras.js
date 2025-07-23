// Peça uma frase e transforme para que cada palavra comece com letra maiúscula e o restante minúsculo.

const frase = "olá galera de cowboy";
const fraseDividida = frase.split(" ");
const resposta = [];
let auxilio = "";

for (let i = 0; i < fraseDividida.length; i++) {
  for (let j = 0; j < fraseDividida[i].length; j++) {
    if (j === 0) {
      auxilio += fraseDividida[i][j].toUpperCase();
    } else {
      auxilio += fraseDividida[i][j];
    }
  }
  resposta.push(auxilio);
  auxilio = "";
}

console.log(resposta.join(" "));

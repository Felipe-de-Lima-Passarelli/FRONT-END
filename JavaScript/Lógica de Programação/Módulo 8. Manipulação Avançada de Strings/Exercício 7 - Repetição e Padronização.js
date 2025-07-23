// Peça uma palavra e um número N. Exiba a palavra repetida N vezes, separadas por hífen (-).

const palavra = "Abacate";
const N = 3;

const resposta = [];

for (let i = 0; i < N; i++) {
  resposta.push(palavra);
}

console.log(resposta.join(" - "));

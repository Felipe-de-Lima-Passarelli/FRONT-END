// Peça uma palavra ou frase e verifique se é um palíndromo (lê-se igual de trás pra frente, desconsiderando espaços e pontuação).Permita que o usuário digite frases com espaços e pontuação, que ainda assim sejam verificadas corretamente.

const palavraTeste = "Radar";
const palavraInvertida = palavraTeste
  .trim()
  .toLowerCase()
  .split("")
  .reverse()
  .join("");

if (palavraTeste.toLowerCase() === palavraInvertida) {
  console.log("É um palíndromo");
} else {
  console.log("Não é um palíndromo");
}

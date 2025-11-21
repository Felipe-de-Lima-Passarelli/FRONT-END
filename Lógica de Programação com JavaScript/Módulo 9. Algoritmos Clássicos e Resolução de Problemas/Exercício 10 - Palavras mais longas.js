// Peça uma frase e identifique a palavra mais longa.

const frase1 = "Olá, tudo bem com você hoje? Espero que esteja bem também";
const fraseDividida1 = frase1.split(" ");
let maiorPalavra1 = "";

for (let frases of fraseDividida1) {
  if (frases.length > maiorPalavra1.length) {
    maiorPalavra1 = frases;
  }
}

console.log(maiorPalavra1);

// Se houver empate, mostre todas as palavras mais longas.

const frase2 = "Olá, tudo bem com você hoje? Espero que esteja bem também";
const fraseDividida2 = frase2.split(" ");
let maiorPalavra2 = [""];

for (let frases of fraseDividida2) {
  if (frases.length > maiorPalavra2[0].length) {
    maiorPalavra2 = [""];
    maiorPalavra2[0] = frases;
  } else {
    if (frases.length === maiorPalavra2[0].length) {
      maiorPalavra2.push(frases);
    }
  }
}

console.log(maiorPalavra2);

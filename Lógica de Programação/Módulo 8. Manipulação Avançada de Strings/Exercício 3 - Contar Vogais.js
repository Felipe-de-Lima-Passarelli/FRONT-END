// Peça uma frase e conte quantas vogais (a, e, i, o, u) ela tem.

const frase = "Isso aqui é apenas uma frase teste para o exercício!";
const vogais = [
  "a",
  "à",
  "á",
  "ã",
  "e",
  "è",
  "é",
  "i",
  "ì",
  "í",
  "o",
  "ò",
  "ó",
  "õ",
  "u",
  "ù",
  "ú",
];

let contador = 0;
for (let letra of frase.toLowerCase()) {
  if (vogais.includes(letra)) {
    contador++;
  }
}

console.log(contador);

// Peça uma frase e separe as palavras em um array, exibindo uma por linha.

const palavra = "Olá, tudo bem com você?";
let contador = 0;

for (let palavras of palavra.split(" ")) {
  console.log(palavras);
  if (palavras.length >= 5) {
    contador++;
  }
}

// Conte quantas palavras possuem mais de 5 letras.

console.log(contador);

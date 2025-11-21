// Peça uma frase e inverta a ordem das palavras, exibindo a frase invertida.

const frase = "Olá, está frase terá as palavras invertidas";
const palavrasInvertidas = frase.split(" ").reverse().join(" ");

console.log(palavrasInvertidas);

// Inverta também cada palavra individualmente.

const letrasInvertida = [];

for (let palavras of palavrasInvertidas.split(" ")) {
  letrasInvertida.push(palavras.split("").reverse().join(""));
}

console.log(letrasInvertida.join(" "));

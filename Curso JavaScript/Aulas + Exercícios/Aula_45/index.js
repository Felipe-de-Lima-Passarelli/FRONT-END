//Retorne a soma do dobro dos números pares
//Utilizando filter, map e reduce juntos

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaDobroPares = numeros
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((acumulador, valor) => (acumulador += valor));

console.log(somaDobroPares);

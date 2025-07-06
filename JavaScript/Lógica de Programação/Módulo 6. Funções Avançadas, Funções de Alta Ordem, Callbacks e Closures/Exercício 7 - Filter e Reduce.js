// Crie um array com números de -5 a 5. Use .filter() para obter apenas números positivos. Use .reduce() para somar todos os números do array original.

const numeros = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

const positivos = numeros.filter((num) => num > 0);
console.log(positivos);

const somatorio = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(somatorio);

// Exiba a soma dos positivos e dos negativos separadamente.

const somatoriopositivo = numeros
  .filter((num) => num > 0)
  .reduce((acumulador, num) => acumulador + num, 0);

const somatorionegativo = numeros
  .filter((num) => num < 0)
  .reduce((acumulador, num) => acumulador + num, 0);

console.log(somatoriopositivo);
console.log(somatorionegativo);

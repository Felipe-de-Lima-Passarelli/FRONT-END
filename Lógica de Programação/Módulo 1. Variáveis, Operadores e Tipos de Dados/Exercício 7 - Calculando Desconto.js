// Crie um programa que calcule o preço de um produto após aplicar um desconto. Defina o valor original (precoOriginal) e a porcentagem de desconto (descontoPercentual). Calcule o valor do desconto e o preço final.

const precoOriginal = 100.75;
const descontoPercentual = 10;

console.log(
  `O valor do desconto é: R$${(descontoPercentual / 100) * precoOriginal}`
);

console.log(
  `O preço final do produto é: R$${
    precoOriginal - (descontoPercentual / 100) * precoOriginal
  }`
);

// Formate a saída para exibir duas casas decimais, como se fosse dinheiro.

console.log(
  `O valor do desconto é: R$${(
    (descontoPercentual / 100) *
    precoOriginal
  ).toFixed(2)}`
);

console.log(
  `O preço final do produto é: R$${
    precoOriginal - ((descontoPercentual / 100) * precoOriginal).toFixed(2)
  }`
);

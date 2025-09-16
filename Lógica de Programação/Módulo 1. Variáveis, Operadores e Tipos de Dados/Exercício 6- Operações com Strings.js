// Crie duas variáveis chamadas primeiroNome e sobrenome. Una essas duas variáveis para formar o nome completo e exiba no console.

let primeiroNome = "Felipe";
let sobrenome = "de Lima Passarelli";
console.log(`Meu nome é: ${primeiroNome} ${sobrenome}`);

// Exiba também a quantidade de caracteres que o nome completo possui.

console.log(primeiroNome.length + sobrenome.replace(/\s+/g, "").length);

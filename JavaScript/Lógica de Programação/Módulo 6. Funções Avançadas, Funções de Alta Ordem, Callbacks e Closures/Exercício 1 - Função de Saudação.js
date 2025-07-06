// Crie uma função chamada saudacao que receba um nome e exiba: "Olá, [nome]!". Se nenhum nome for informado, exiba "Olá, visitante!"

function saudacao(nome = "visitante") {
  return `Olá, ${nome}!`;
}

console.log(saudacao("Felipe"));
console.log(saudacao());

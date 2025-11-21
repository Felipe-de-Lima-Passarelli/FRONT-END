for (let i = 0; i <= 5; i++) {
  console.log(`Linha ${i}`);
}

const frutas = ["Pêra", "Maçã", "Uva"];

for (let i in frutas) {
  console.log(frutas[i]);
}

const nome = "Luiz Otávio";

for (let valor of nome) {
  console.log(valor);
}

const nomes = ["Luiz", "Otávio", "Felipe"];
nomes.forEach(function (valor, indice) {
  console.log(valor, indice);
});

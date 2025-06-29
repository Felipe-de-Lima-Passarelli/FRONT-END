// Crie um programa que calcula o valor de um frete com base no estado de destino: SP → R$10 / RJ → R$15 / MG → R$20 / Outros → R$25. Adapte para aceitar a entrada do estado em letras minúsculas ou maiúsculas (ex.: "sp", "SP", "Sp"...).

let destino = "sp";

if (destino.toLowerCase() === "sp") {
  console.log("O frete é R$10");
} else if (destino.toLowerCase() === "rj") {
  console.log("O frete é R$15");
} else if (destino.toLowerCase() === "mg") {
  console.log("O frete é R$20");
} else {
  console.log("O frete é R$25");
}

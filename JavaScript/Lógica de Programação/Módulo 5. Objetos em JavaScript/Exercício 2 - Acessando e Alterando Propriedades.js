// Dado o objeto carro: Altere o ano para 2022. / Adicione a propriedade cor com valor "Prata". / Exiba o objeto atualizado.

let carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
};

carro.ano = 2022;
carro.cor = "Prata";
console.log(Object.entries(carro));

// Remova a propriedade modelo usando delete.

delete carro.modelo;
console.log(Object.entries(carro));

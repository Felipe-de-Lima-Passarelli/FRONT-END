// Peça um número e exiba se ele é positivo, negativo ou zero.

const valores1 = [4, -2, 0];

for (index in valores1) {
  if (valores1[index] > 0) {
    console.log("Número positivo");
  } else if (valores1[index] < 0) {
    console.log("Número negativo");
  } else {
    console.log("O número é zero");
  }
}

// Valide se o valor digitado é realmente um número.

const valores2 = [4, "Teste", -2, 0, "Olá"];

for (index in valores2) {
  if (typeof valores2[index] !== "number") {
    console.log("Isso não é um número");
  } else if (valores2[index] > 0) {
    console.log("Número positivo");
  } else if (valores2[index] < 0) {
    console.log("Número negativo");
  } else {
    console.log("O número é zero");
  }
}

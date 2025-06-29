// Peça a idade de uma pessoa e classifique conforme: Até 12 anos: Criança / Entre 13 e 17: Adolescente / Entre 18 e 59: Adulto / 60 ou mais: Idoso

let idade1 = 20;

if (idade1 <= 12) {
  console.log("Criança");
} else if (idade1 <= 17) {
  console.log("Adolescente");
} else if (idade1 <= 59) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

// Valide se a idade informada é um número válido e não negativo.

let idade2 = 15;

if (idade2 < 0) {
  console.log("Número negativo inválido");
} else if (idade2 <= 12) {
  console.log("Criança");
} else if (idade2 <= 17) {
  console.log("Adolescente");
} else if (idade2 <= 59) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}

// Peça duas notas ao usuário, calcule a média e exiba: Aprovado (média ≥ 6) / Recuperação (média ≥ 4 e < 6) / Reprovado (média < 4)

let nota1 = 9;
let nota2 = 5;
const media1 = ((nota1 + nota2) / 2).toFixed(2);

if (media1 >= 6) {
  console.log("Aprovado");
} else if (media1 >= 4) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}

// Valide se as notas são válidas (entre 0 e 10).

let nota3 = 10;
let nota4 = 4;
if (nota3 < 0 || nota4 < 0) {
  console.log("Nota inválida");
} else {
  const media2 = ((nota3 + nota4) / 2).toFixed(2);

  if (media2 >= 6) {
    console.log("Aprovado");
  } else if (media2 >= 4) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}

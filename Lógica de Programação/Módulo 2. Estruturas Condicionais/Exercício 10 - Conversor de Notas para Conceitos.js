// Receba uma nota numérica e converta para conceito: 9 a 10 → A / 8 a 8.9 → B / 7 a 7.9 → C / 6 a 6.9 → D / Menor que 6 → F. Valide se a nota está entre 0 e 10. Caso não esteja, exiba uma mensagem de erro.

let notaNumerica = 9.4;
let notaConceito = "";

if (notaNumerica < 0 || notaNumerica > 10) {
  console.log("Nota inválida");
} else {
  if (notaNumerica >= 9) {
    notaConceito = "A";
  } else if (notaNumerica >= 8) {
    notaConceito = "B";
  } else if (notaNumerica >= 7) {
    notaConceito = "C";
  } else if (notaNumerica >= 6) {
    notaConceito = "D";
  } else {
    notaConceito = "F";
  }
}

console.log(notaConceito);

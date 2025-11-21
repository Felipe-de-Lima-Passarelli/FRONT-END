// Peça números ao usuário até que ele digite um número negativo. Ao final, exiba a soma de todos os números positivos digitados.

let numeroDigitado = Number(prompt("Digite um número"));
let acumulador = 0;
let numerosDigitados = 0;

while (numeroDigitado >= 0) {
  acumulador += numeroDigitado;
  numerosDigitados++;
  numeroDigitado = Number(prompt("Digite mais um número"));
}

alert(`A soma de todos números positivos digitados foram ${acumulador}`);

// Mostre também quantos números foram digitados antes do número negativo.

alert(`O total de números digitados foi ${numerosDigitados}`);

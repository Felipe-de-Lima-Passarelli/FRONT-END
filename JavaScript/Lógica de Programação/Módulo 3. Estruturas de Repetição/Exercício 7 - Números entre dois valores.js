// Peça dois números (inicial e final) e exiba todos os números entre eles, incluindo ambos.

let numero1 = 10;
let numero2 = 20;

for (let i = numero1; i <= numero2; i++) {
  console.log(i);
}

// Se o número inicial for maior que o final, faça a contagem decrescente automaticamente.

let numero3 = 40;
let numero4 = 30;

if (numero3 < numero4) {
  for (let i = numero3; i <= numero4; i++) {
    console.log(i);
  }
} else {
  for (let i = numero3; i >= numero4; i--) {
    console.log(i);
  }
}

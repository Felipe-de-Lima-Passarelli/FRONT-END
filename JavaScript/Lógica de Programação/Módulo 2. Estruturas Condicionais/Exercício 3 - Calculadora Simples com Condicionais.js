// Peça ao usuário dois números e uma operação (+, -, *, /). Execute a operação informada e mostre o resultado.

let number1 = 4;
let number2 = 2;
let simbol = "*";

const conta = number1.toString() + simbol + number2.toString();

// Inclua uma verificação para evitar divisão por zero e exiba uma mensagem de erro se isso acontecer.

if (simbol === "/" && number2 === 0) {
  console.log("Não é possível dividir um número por zero");
} else {
  console.log(eval(conta).toFixed(2));
}

//1. Operadores aritméticos

/*
    Somar (+)
    Subtrair (-)
    Multiplicar (*)
    Dividir (/)
*/

let numero1 = 10;
let numero2 = 5;

let soma = numero1 + numero2;

console.log(soma);

//2. Operadores relacionais (Retornam verdadeiro ou falso)

/*
    === (Extritamente igual)
    == (Igual a)
    != (Diferente)
    > (Maior que)
    < (Menor que)
    >= (Maior ou igual)
    <= (Menor ou igual)
*/

let n1 = 10;
let n2 = 10;

let resultado = n1 === n2;
console.log(resultado);

//3. Operadores lógicos

/*
    && (E)
    || (Ou)
*/

let teste = true && true;
console.log(teste);

//4. Estrutura condicional

let idade = 18;

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

//5. Operador ternário

let novaIdade = 20;

const ternario = novaIdade >= 18 ? "Maior idade" : "Menor idade";
console.log(ternario);

//6. Switch

let opcao = 1;

switch (opcao) {
  case 1:
    console.log("Opção numero 1");
    break;
  case 2:
    console.log("Opção número 2");
    break;
  case 3:
    console.log("Opção número 3");
    break;
  default:
    console.log("Opção inválida");
}

//7. Funções

function somar(a, b) {
  return a + b;
}

console.log(`A soma de ${20} e ${30} é: ${somar(20, 30)}`);

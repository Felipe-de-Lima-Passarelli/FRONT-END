//1. Arrays

/*
    .push (Adicionar um item para o array)
    .delete (Deletar um item do array)
*/

let nomes = ["Felipe", "Patricia", "Vanessa"];
console.log(nomes[0], nomes[1], nomes[2]);

//2. Concatenação e Template String

let nome = nomes[0];

let texto1 = "Olá " + nome;
console.log(texto1);

let texto2 = `Olá ${nome}`;
console.log(texto2);

//3. Loops (While, do while e For)

let numero1 = 1;
while (numero1 <= 4) {
  console.log(`Etapa ${numero1} concluída`);
  numero1++;
}

let numero2 = 1;
do {
  console.log(`Etapa ${numero2} concluída`);
  numero2++;
} while (numero2 <= 0); //Mesmo não satisfazendo a condição, será realizado a primeira etapa por conta do "do" inicial

for (let i = 0; i <= 4; i++) {
  console.log(`O número atual do looping FOR é ${i}`);
}

//4. Operadores de Atribuição

let salario = 500;
let bonus = 200;

/*
  salario += bonus
  salario -= bonus
  salario *= bonus
  salario /= bonus
*/

salario += bonus; //Atribuição com aritmético
console.log(salario);

//5. Operadores Unários

/*
  ++number (Pré fixado)
  number++ (Pós fixado)
  --number (Pré fixado)
  number-- (Pós fixado)
*/

let number = 1;

number++;
number--;

console.log(number);

//6. Diferença de var e let

/*
  var tem escopo global e de função
  let tem escopo global, de função e de bloco
*/

//7. Função Anônima

const somar = function (a, b) {
  return a + b;
};

console.log(somar(3, 5));

//8. Arrow Function

const multiplicar = (a, b) => a * b;

console.log(multiplicar(2, 5));

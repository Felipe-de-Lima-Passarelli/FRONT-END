// Escreva uma função que recebe 2 números e retorne o maior deles

const maior = (a, b) => (a > b ? a : b);
console.log(maior(1, 2));

// Escreva uma função chamada ePaisagem que recebe dois argumentos,
// largura e altura de uma imagem (number).
// true = imagem modo paisagem
// false = imagem em outro modo

const ePaisagem = (largura, altura) => largura > altura;
console.log(ePaisagem(500, 400));

// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisível por 3 = Fizz
// Número é divisível por 5 = Buzz
// Número é divisível por 3 e 5 = FizzBuzz
// Número não é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número

function fizzBuzz(x) {
  if (typeof x !== "number") {
    return NaN;
  }

  if (x % 3 === 0 && x % 5 === 0) {
    return "FizzBuzz";
  } else if (x % 3 === 0) {
    return "Fizz";
  } else if (x % 5 === 0) {
    return "Buzz";
  } else {
    return x;
  }
}

for (let i = 0; i <= 100; i++) {
  console.log(`${i}: ${fizzBuzz(i)}`);
}

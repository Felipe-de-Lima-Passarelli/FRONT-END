// Crie um objeto calculadora com métodos: soma(a, b), subtrai(a, b), multiplica(a, b), divide(a, b). Use cada método e exiba o resultado. Na divisão, trate divisão por zero retornando "Erro: divisão por zero."

const calculadora = {
  soma(a, b) {
    return a + b;
  },
  subtrai(a, b) {
    return a - b;
  },
  multiplica(a, b) {
    return a * b;
  },
  divide(a, b) {
    if (b === 0) {
      return "Erro: divisão por zero";
    }
    return a / b;
  },
};

console.log(calculadora.soma(3, 7));
console.log(calculadora.subtrai(13, 3));
console.log(calculadora.multiplica(5, 2));
console.log(calculadora.divide(20, 2));
console.log(calculadora.divide(20, 0));

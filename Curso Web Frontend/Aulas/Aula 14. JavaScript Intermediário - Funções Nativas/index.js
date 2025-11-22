//1. Parâmetros e retorno de função

//Valores padrões para num1 e num2, evitando erro de NaN caso não passe 2 parâmetros para a função
function somar(num1 = 0, num2 = 0) {
  return num1 + num2;
}

console.log(somar(2, 5));
console.log(somar(2));

//2. Funções de Callback

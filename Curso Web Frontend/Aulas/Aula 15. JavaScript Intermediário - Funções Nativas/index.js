//1. Parâmetros e retorno de função

//Valores padrões para num1 e num2, evitando erro de NaN caso não passe 2 parâmetros para a função
function somar(num1 = 0, num2 = 0) {
  return num1 + num2;
}

console.log(somar(2, 5));
console.log(somar(2));

//2. Funções de Callback

function processar(callbackSucesso, callbackErro) {
  //Simulação de dados
  let resultadoProcessamento = true;

  if (resultadoProcessamento) {
    callbackSucesso();
  } else {
    callbackErro();
  }
}

const salvarResultado = function () {
  console.log("Resultado salvo");
};

const erro = function () {
  console.log("Erro");
};

processar(salvarResultado, erro);

//3. Funções Nativas (texto, matemática e datas)

//Texto

let nome1 = "Felipe";
console.log(nome1.length); //Quantidade de caracteres
console.log(nome1.charAt(0)); //Letra da posição 0

let nome2 = nome1.replace("Felipe", "Patricia"); //Substitui
console.log(nome1, nome2);

let frase = "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo";
console.log(frase.substring(0, 9)); //Inicia em 0 e termina 9

let resultado = nome1.split(""); //Divide as letras em array
console.log(resultado);

console.log(nome1.slice(0, 4)); //Corte na posição 0 até 4

console.log(nome1.toUpperCase()); //Letras maiúsculas
console.log(nome1.toLowerCase()); //Letras minúsculas

let nomeSobrenome = "   Felipe de Lima        ";
nomeSobrenome = nomeSobrenome.trim(); //Remove  espaços
console.log(nomeSobrenome);

let a = "Olá";
let b = "Mundo";
let c = "!";

console.log(a.concat(" ", b, c)); //Concatena as palavras

//Matemática

let numero = 280.5;
console.log(Math.ceil(numero)); //Arredonda para cima
console.log(Math.floor(numero)); //Arredonda para baixo
console.log(Math.round(numero)); //Arredonda para ambos

console.log(Math.random()); //Gera número aleatório de 0 a 1

console.log(Math.min(10, 20)); //Retorna menor número
console.log(Math.max(10, 20)); //Retorna maior número

console.log(Math.pow(2, 10)); //1º é base -> 2º é potência

console.log(Math.sqrt(16)); //Retorna raíz quadrada

//Datas

const data = new Date();
console.log(`Dia ${data.getDate()}`); //Dia
console.log(`Mês ${data.getMonth() + 1}`); //Mês
console.log(`Ano ${data.getFullYear()}`); //Ano

console.log(`Hora: ${data.getHours()}`); //Horas
console.log(`Minuto: ${data.getMinutes()}`); //Minutos
console.log(`Segundo: ${data.getSeconds()}`); //Segundos

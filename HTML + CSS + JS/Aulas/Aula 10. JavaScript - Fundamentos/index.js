//1. Primeira aplicação
const hora = new Date().getHours(); //Hora atual
let saudacao = ""; //Saudação depende da hora de visita

if (hora <= 12) {
  saudacao = "Bom dia";
} else if (hora <= 18) {
  saudacao = "Boa tarde";
} else {
  saudacao = "Boa noite";
}

//Escrita da mensagem no HTML com innerHTML
document.getElementById("mensagem").innerHTML = saudacao;

//2. Variáveis e Constantes
var nome1 = "Felipe"; //Mutável com escopo global
let nome2 = "Jamilton"; //Mutável com escopo de bloco
const PI = 3.14; //Imutável

// 3. Tipos
let nome = "Jamilton"; //String
let numero = 1200; //Inteiros ou decimais
let decimal = 1.25; //Inteiros ou decimais
let estado = true; //Booleanos

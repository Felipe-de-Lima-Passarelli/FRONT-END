resposta = document.querySelector(".resposta");
data = new Date();
let dia;
let mes;

switch (data.getDay()) {
  case 0:
    dia = "Domingo";
    break;
  case 1:
    dia = "Segunda-feira";
    break;
  case 2:
    dia = "Terça-feira";
    break;
  case 3:
    dia = "Quarta-feira";
    break;
  case 4:
    dia = "Quinta-feira";
    break;
  case 5:
    dia = "Sexta-feira";
    break;
  case 6:
    dia = "Sábado";
    break;
  default:
    dia = "Dia da semana inválido";
}

switch (data.getMonth()) {
  case 0:
    mes = "janeiro";
    break;
  case 1:
    mes = "fevereiro";
    break;
  case 2:
    mes = "março";
    break;
  case 3:
    mes = "abril";
    break;
  case 4:
    mes = "maio";
    break;
  case 5:
    mes = "junho";
    break;
  case 6:
    mes = "julho";
    break;
  case 7:
    mes = "agosto";
    break;
  case 8:
    mes = "setembro";
    break;
  case 9:
    mes = "outubro";
    break;
  case 10:
    mes = "novembro";
    break;
  case 11:
    mes = "dezembro";
    break;
  default:
    mes = "Mês inválido";
}

resposta.innerHTML = `${dia}, ${data.getDate()} de ${mes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;

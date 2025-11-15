function calcular(alcool, gasolina) {
  alcool = Number(alcool);
  gasolina = Number(gasolina);

  if (alcool === 0 || gasolina === 0) {
    return;
  } else if (alcool / gasolina < 0.7) {
    resultado.innerHTML = "É melhor utilizar álcool";
  } else {
    resultado.innerHTML = "É melhor utilizar gasolina";
  }
}

const botao = document.getElementById("calcular");
const alcool = document.getElementById("alcool");
const gasolina = document.getElementById("gasolina");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", () => calcular(alcool.value, gasolina.value));

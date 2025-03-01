function calcularIMC() {
  const peso = document.querySelector("#peso").value;
  const altura = document.querySelector("#altura").value;
  let imc = peso / altura ** 2;
  imc = imc.toFixed(2);
  let imcAtual;

  if (imc < 18.5) {
    imcAtual = "Abaixo do peso";
  } else if (imc <= 24.9) {
    imcAtual = "Peso normal";
  } else if (imc <= 29.9) {
    imcAtual = "Sobrepeso";
  } else if (imc <= 34.9) {
    imcAtual = "Obesidade grau 1";
  } else if (imc <= 39.9) {
    imcAtual = "Obesidade grau 2";
  } else {
    imcAtual = "Obesidade grau 3";
  }

  document.querySelector(
    ".resposta"
  ).innerHTML += `<p>Seu IMC é <strong>${imc} (${imcAtual})</strong></p>`;
}

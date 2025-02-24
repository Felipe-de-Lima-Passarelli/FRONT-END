// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName
// document.getElementsByName
// document.querySelector("#ID")
// document.querySelector(".Class")

numero = Number(prompt("Digite um número: "));
numeroTitulo = document.getElementById("numero_titulo");
divTexto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
divTexto.innerHTML += `<p>Raiz quadrada: <strong>${
  numero ** (1 / 2)
}</strong></p>`;
divTexto.innerHTML += `<p>${numero} é inteiro: <strong>${Number.isInteger(
  numero
)}</strong></p>`;
divTexto.innerHTML += `<p>É NaN: <strong>${Number.isNaN(numero)}</strong></p>`;
divTexto.innerHTML += `<p>Arredondando para baixo: <strong>${Math.floor(
  numero
)}</strong></p>`;
divTexto.innerHTML += `<p>Arredondando para cima: <strong>${Math.ceil(
  numero
)}</strong></p>`;
divTexto.innerHTML += `<p>Com duas casas decimais: <strong>${numero.toFixed(
  2
)}</strong></p>`;

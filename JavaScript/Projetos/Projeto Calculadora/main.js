operadores = ["/", "*", "-", "+"];

valorCalculadora = document.querySelector("#valorCalc");

function operador(simbolo) {
  if (simbolo === "C") {
    valorCalculadora.value = "";
  } else if (simbolo !== "=") {
    if (operadores.includes(valorCalculadora.value.at(-1))) {
      valorCalculadora.value = valorCalculadora.value.slice(0, -1) + simbolo;
    } else {
      valorCalculadora.value += simbolo;
    }
  } else {
    resultado = String(eval(valorCalculadora.value));
    pos = resultado.indexOf(".") + 1;
    if (resultado.slice(pos).length > 5) {
      resultado = Number(resultado).toFixed(5);
    }
    valorCalculadora.value = resultado;
  }
}

function numeros(valor) {
  valorCalculadora.value += valor;
}

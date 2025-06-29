// Peça um número inteiro e calcule seu fatorial. Ex.: 5! = 5 * 4 * 3 * 2 * 1 = 120. Mostre também o processo completo do cálculo, não só o resultado. Exemplo: 5! = 5 x 4 x 3 x 2 x 1 = 120

const numeroInformado = Number(
  prompt("Digite um número para calcular seu fatorial (Número maior que zero)")
);

while (numeroInformado < 0) {
  const numeroInformado = Number(
    prompt(
      "Digite um número para calcular seu fatorial (Número maior que zero)"
    )
  );
}

numeros = [];
for (let i = numeroInformado; i >= 1; i--) {
  numeros.push(i);
}

function fatorar(num) {
  if (num === 1) return num;
  return num * fatorar(num - 1);
}

alert(fatorar(numeroInformado));
alert(numeros.join(" * ") + " = " + fatorar(numeroInformado));

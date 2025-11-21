secao = document.querySelector(".container");

let cpfPessoa = prompt("Digite o seu CPF: ");
cpfPessoa = cpfPessoa.replace(/\D/g, "");
doisDigitos = cpfPessoa.slice(-2);

let arrayOriginal = [10, 9, 8, 7, 6, 5, 4, 3, 2];
let numerosCpf = [];

for (let valores of cpfPessoa) {
  numerosCpf.push(Number(valores));
}

numerosCpf = numerosCpf.slice(0, 9);

let somaTotalNumerosCpf = arrayOriginal
  .map((valor, indice) => valor * numerosCpf[indice])
  .reduce((acumulador, valor) => acumulador + valor, 0);

let primeiroDigito = 11 - (somaTotalNumerosCpf % 11);
primeiroDigito = primeiroDigito >= 10 ? 0 : primeiroDigito;

arrayOriginal.unshift(11);
numerosCpf.push(primeiroDigito);

let somaTotalNumerosCpf2 = arrayOriginal
  .map((valor, indice) => valor * numerosCpf[indice])
  .reduce((acumulador, valor) => acumulador + valor, 0);

let segundoDigito = 11 - (somaTotalNumerosCpf2 % 11);
segundoDigito = segundoDigito >= 10 ? 0 : segundoDigito;

doisDigitosPrograma = String(primeiroDigito) + String(segundoDigito);

let respostaFinal;
if (
  doisDigitos === doisDigitosPrograma &&
  cpfPessoa.split(cpfPessoa[0]).length - 1 !== 11
) {
  respostaFinal = "CPF Válido";
} else {
  respostaFinal = "CPF Inválido";
}

secao.innerHTML += `<br><p>${respostaFinal}</p>`;

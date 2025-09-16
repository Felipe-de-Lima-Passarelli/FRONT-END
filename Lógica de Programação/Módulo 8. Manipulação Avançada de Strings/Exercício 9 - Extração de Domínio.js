// Peça um email e extraia o domínio (a parte depois do @). Exiba o domínio principal (ex.: para usuario@gmail.com.br, exiba gmail).

const email = "teste@gmail.com";
const posicaoInicial = email.indexOf("@") + 1;
const posicaoFinal = email.indexOf(".");
let resposta = "";

for (let i = posicaoInicial; i < posicaoFinal; i++) {
  resposta += email[i];
}

console.log(resposta);

// Peça uma senha ao usuário. Enquanto a senha digitada for diferente de "1234", exiba "Senha incorreta. Tente novamente.". Quando acertar, exiba "Acesso permitido.". Limite para no máximo 5 tentativas, senão exibe "Acesso bloqueado.".

let senhaCorreta = 1234;
let tentativas = 5;
let senhaDigitada;

while (tentativas > 0) {
  senhaDigitada = Number(prompt("Digite sua senha"));

  if (senhaDigitada === senhaCorreta) {
    alert("Acesso permitido");
    break;
  }

  tentativas--;
  alert("Senha incorreta");

  if (tentativas === 0) {
    alert("Acesso bloqueado");
  }
}

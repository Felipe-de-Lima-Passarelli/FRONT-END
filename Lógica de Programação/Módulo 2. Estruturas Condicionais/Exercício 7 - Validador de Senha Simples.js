// Crie um programa que compara uma senha armazenada em uma variável (senhaCorreta) com uma senha digitada pelo usuário. Se for igual, exibe: "Acesso permitido", senão: "Acesso negado". Permita que o usuário tenha até 3 tentativas antes de bloquear o acesso.

const senhaCorreta = 12345;
let tentativas = 0;

while (tentativas < 3) {
  const senhaDigitada = Number(prompt("Digite sua senha"));
  if (senhaDigitada === senhaCorreta) {
    console.log("Acesso permitido");
    break;
  } else {
    console.log("Acesso negado");
    tentativas++;
  }
}

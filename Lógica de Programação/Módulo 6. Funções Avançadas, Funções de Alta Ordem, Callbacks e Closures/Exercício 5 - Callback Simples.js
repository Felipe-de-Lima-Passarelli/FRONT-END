// Crie uma função chamada executar que receba outra função como parâmetro (callback) e execute essa função.

function saudacao() {
  return `Olá visitante!`;
}

function executar(callback) {
  return callback();
}

console.log(executar(saudacao));

// Passe uma arrow function que exiba "Callback executado!" como argumento de executar.

console.log(
  executar(() => {
    return `Callback executado!`;
  })
);

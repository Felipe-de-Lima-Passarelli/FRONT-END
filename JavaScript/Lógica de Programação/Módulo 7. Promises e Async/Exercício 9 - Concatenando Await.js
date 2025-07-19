// Crie duas funções async: obterUsuario() → resolve com { id:1, nome:"Maria" } em 1s e obterPedidos() → resolve com ["Pedido1", "Pedido2"] em 2s Crie uma terceira função que usa await para obter primeiro o usuário e depois os pedidos, e exiba tudo junto. Mostre o tempo total gasto (use console.time() e console.timeEnd()).

async function obterUsuario() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, nome: "Maria" });
    }, 1000);
  });
}

async function obterPedidos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Pedido 1", "Pedido 2"]);
    }, 2000);
  });
}

async function final() {
  console.time("Tempo total de execução");
  const resultadoInicial = await obterUsuario();
  const resultadoFinal = await obterPedidos();
  await console.log(resultadoInicial, resultadoFinal);
  console.timeEnd("Tempo total de execução");
}

final();

// Crie uma função async que simula buscar dados: Após 2 segundos, ela resolve com "Dados carregados" se uma variável ok for true, mas se ok for false, lança um erro "Falha ao carregar dados". Use try/catch para tratar os dois casos.

async function buscarDados(sucesso = true) {
  try {
    const resultado = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const ok = sucesso;
        if (ok) {
          resolve("Dados carregados");
        } else {
          reject("Falha ao carregar dados");
        }
      }, 2000);
    });
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

buscarDados(true);
buscarDados(false);

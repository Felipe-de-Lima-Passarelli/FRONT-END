// Simule uma função fetchDados que retorna uma Promise com dados fictícios ({ id:1, nome:"Produto" }) após 1 segundo. Use async/await para buscar esses dados e exibir no console. Inclua tratamento de erro caso algo dê errado.

async function fetchDados() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ok = true;
      if (ok) {
        resolve({ id: 1, nome: "Produto" });
      } else {
        reject("Falha ao buscar dados");
      }
    }, 1000);
  });
}

async function executar() {
  try {
    const resultado = await fetchDados();
    console.log(resultado);
  } catch (erro) {
    console.error("Erro ao executar:", erro);
  }
}

executar();

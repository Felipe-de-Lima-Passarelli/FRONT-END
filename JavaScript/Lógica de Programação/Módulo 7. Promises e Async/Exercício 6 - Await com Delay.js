// Crie uma função delay(ms) que retorna uma Promise que resolve após ms milissegundos. Crie outra função async que: Aguarde 3 segundos usando await delay(3000) e depois exiba "3 segundos se passaram"

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

async function esperar(tempo) {
  console.log(`Vamos esperar ${tempo / 1000} segundos`);
  await delay(tempo);
  console.log(`${tempo / 1000} segundos se passaram`);
}

esperar(3000);

// Torne o tempo configurável passando como parâmetro.

esperar(5000);

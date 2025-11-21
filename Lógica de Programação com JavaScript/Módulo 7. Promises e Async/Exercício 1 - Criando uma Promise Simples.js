// Crie uma Promise que resolve com o valor "Operação concluída com sucesso" após 2 segundos. Chame essa Promise e exiba o resultado no console usando .then(). Adicione um .catch() que exibe "Ocorreu um erro" caso a Promise seja rejeitada.

const minhaPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = Math.random() > 0.5;
    if (sucesso) {
      resolve("Operação concluída com sucesso");
    } else {
      reject("Ocorreu um erro");
    }
  }, 2000);
});

minhaPromise
  .then((resultado) => console.log(resultado))
  .catch((error) => console.log(error));

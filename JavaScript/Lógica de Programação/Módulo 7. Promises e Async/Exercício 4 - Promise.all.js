// Crie três Promises que resolvem após 1, 2 e 3 segundos, cada uma com um valor diferente (ex.: "Primeira", "Segunda", "Terceira"). Use Promise.all para esperar todas serem concluídas e exibir um array com os resultados.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = true;
    if (sucesso) {
      resolve("Promise1 de 1 segundo bem sucedida");
    } else {
      reject("Promise1 falhou");
    }
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = true;
    if (sucesso) {
      resolve("Promise2 de 2 segundo bem sucedida");
    } else {
      reject("Promise2 falhou");
    }
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = true;
    if (sucesso) {
      resolve("Promise3 de 3 segundo bem sucedida");
    } else {
      reject("Promise3 falhou");
    }
  }, 3000);
});

Promise.all([promise1, promise2, promise3])
  .then((respostas) => {
    console.log("Todas promises foram bem sucedidas");
    console.log(respostas);
  })
  .catch((error) => console.log(error));

// Torne uma das Promises rejeitada e trate o erro com .catch().

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = true;
    if (sucesso) {
      resolve("Promise4 de 4 segundo bem sucedida");
    } else {
      reject("Promise1 falhou");
    }
  }, 4000);
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = false;
    if (sucesso) {
      resolve("Promise5 de 5 segundo bem sucedida");
    } else {
      reject("Promise5 falhou");
    }
  }, 5000);
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const sucesso = true;
    if (sucesso) {
      resolve("Promise6 de 6 segundo bem sucedida");
    } else {
      reject("Promise6 falhou");
    }
  }, 6000);
});

Promise.all([promise4, promise5, promise6])
  .then((respostas) => {
    console.log("Todas promises foram bem sucedidas");
    console.log(respostas);
  })
  .catch((error) => console.log(error));

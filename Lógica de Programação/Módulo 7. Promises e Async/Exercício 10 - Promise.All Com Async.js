// Use Promise.all junto com async/await para buscar em paralelo: Um número aleatório (Promise simulada que resolve em 1s), uma string qualquer (Promise simulada que resolve em 2s) e Um booleano (Promise simulada que resolve em 3s). Exiba todos os resultados quando todas as Promises forem concluídas. Mostre também o tempo total gasto.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const ok = true;
    if (ok) {
      resolve(Math.round(Math.random() * 100));
    } else {
      reject("Falha na Promise1");
    }
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const ok = true;
    if (ok) {
      resolve("String padronizada");
    } else {
      reject("Falha na Promise2");
    }
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const ok = true;
    if (ok) {
      resolve(true);
    } else {
      reject("Falha na Promise1");
    }
  }, 3000);
});

console.time("Tempo total de execução");

Promise.all([promise1, promise2, promise3]).then((resposta) => {
  console.log(resposta);
  console.timeEnd("Tempo total de execução");
});

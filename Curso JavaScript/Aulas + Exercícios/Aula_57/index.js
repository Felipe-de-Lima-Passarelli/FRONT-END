function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD VALUE");

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

const promises = [
  "Primeiro Valor",
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 500),
  esperaAi("Promise 3", 1000),
  "Último Valor",
];

Promise.all(promises)
  .then((valor) => console.log(valor))
  .catch((e) => console.log(`ERRO: ${e}`));

Promise.race(promises)
  .then((valor) => console.log(valor))
  .catch((e) => console.log(`ERRO: ${e}`));

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

esperaAi("Conexão com o Banco de Dados", rand(1000, 3000)).then((resposta) => {
  console.log(resposta);
  return esperaAi("Buscando dados do Banco", rand(1000, 3000)).then(
    (resposta) => {
      console.log(resposta);
      return esperaAi(12, rand(1000, 3000)) //Retornando erro daqui
        .then((resposta) => {
          console.log(resposta);
        })
        .then(() => {
          console.log("Exibe dados na tela");
        })
        .catch((e) => {
          console.log(`ERRO: ${e}`);
        });
    }
  );
});

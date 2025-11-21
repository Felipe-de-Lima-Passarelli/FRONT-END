const promessa = new Promise((resolve, reject) => {
  let sucesso = true;

  setTimeout(() => {
    if (sucesso) {
      resolve("Pizza entregue!");
    } else {
      reject("O motoboy se perdeu!");
    }
  }, 2000);
});

promessa
  .then((mensagem) => console.log("SUCESSO:", mensagem))
  .catch((erro) => console.log("ERRO:", erro));

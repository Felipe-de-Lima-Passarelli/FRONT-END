function mostraHora() {
  let data = new Date();
  return data.toLocaleString("pt-BR", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000); // Executa a função mostraHora() a cada segundo.

setTimeout(function () {
  clearInterval(timer);
}, 10000); //Para o timer do setInterval depois de 10 segundos.

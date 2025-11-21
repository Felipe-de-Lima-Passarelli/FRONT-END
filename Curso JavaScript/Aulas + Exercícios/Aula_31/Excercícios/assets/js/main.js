relogio = document.querySelector(".horas");
iniciar = document.querySelector(".iniciar");
pausar = document.querySelector(".pausar");
zerar = document.querySelector(".zerar");

let timer;
let data = new Date(10800000);

iniciar.addEventListener("click", function (event) {
  relogio.classList.remove("vermelho");
  relogio.classList.add("preto");
  relogio.innerHTML = data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  timer = setInterval(function () {
    data.setTime(data.getTime() + 1000);
    relogio.innerHTML = data.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  }, 1000);
});

pausar.addEventListener("click", function (event) {
  relogio.classList.remove("preto");
  relogio.classList.add("vermelho");
  clearInterval(timer);
});

zerar.addEventListener("click", function (event) {
  relogio.classList.remove("vermelho");
  relogio.classList.add("preto");
  clearInterval(timer);
  data = new Date(10800000);
  relogio.innerHTML = "00:00:00";
});

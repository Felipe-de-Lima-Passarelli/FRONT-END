function criarParagrafos() {
  resultado = document.querySelector(".container");
  const p = document.createElement("p");
  p.classList.add("corFundo");
  p.innerHTML = "Texto teste";
  resultado.appendChild(p);
}

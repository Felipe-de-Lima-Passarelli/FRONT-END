const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

secao = document.querySelector(".container");

for (let i = 0; i <= 3; i++) {
  let tagAtual = elementos[i].tag;
  let textoAtual = elementos[i].texto;
  const tagCriada = document.createElement(tagAtual);
  tagCriada.innerHTML = textoAtual;
  secao.appendChild(tagCriada);
}

//1. Selecionando elementos individuais

/*
    getElementById("ID") | querySelector("#ID")
    getElementsByClassName("CLASS") | querySelector ("CLASS")
    getElementsByTagName("TAG") | querySelector("TAG")
*/

const divPrincipal = document.getElementById("destaque");
console.log(divPrincipal);

const paragrafo = document.querySelector("p");
console.log(paragrafo);

function mudarTexto() {
  const listaPrimeiro = document.getElementsByClassName("primeiro")[0];
  listaPrimeiro.innerHTML = "Teste";
  listaPrimeiro.classList.add("destaque");
}

const botao = document.getElementsByClassName("botao")[0];
botao.addEventListener("click", mudarTexto);

//2. Selecionando múltiplos elementos

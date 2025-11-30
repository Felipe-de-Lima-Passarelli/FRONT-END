//1. Selecionando elementos individuais

/*
    getElementById("ID") | querySelector("#ID")
*/

const divPrincipal = document.getElementById("destaque");
console.log(divPrincipal);

const paragrafo = document.querySelector("p");
console.log(paragrafo);

function mudarTexto() {
  const listaPrimeiro = document.getElementsByClassName("primeiro")[0];
  listaPrimeiro.innerHTML = "Teste";
  listaPrimeiro.classList.remove("primeiro");
  listaPrimeiro.classList.add("itemDestaque");
}

const botao = document.getElementsByClassName("botao")[0];
botao.addEventListener("click", mudarTexto);

//2. Selecionando múltiplos elementos

/*
    getElementsByClassName("CLASS") | querySelector ("CLASS")
    getElementsByTagName("TAG") | querySelector("TAG")
    getElementsByName("NAME")
                                | querySelectorAll()
*/

const listaTotal = document.getElementsByTagName("li");
console.log(listaTotal);

//3. Selecionando elementos de formulário

const formulario = document.getElementsByName("cadastro");
console.log(formulario[0]);

//4. Navegando por elementos

const navegacaoDiv = document.querySelector("#itens");
console.log(navegacaoDiv); // Div central
console.log(navegacaoDiv.parentNode); // Seleciona o pai
console.log(navegacaoDiv.children); // Seleciona os filhos
console.log(navegacaoDiv.firstElementChild); // Primeiro
console.log(navegacaoDiv.lastElementChild); // Último
console.log(navegacaoDiv.nextElementSibling); // Próximo irmão
console.log(navegacaoDiv.previousElementSibling); // Irmão anterior

//5. Selecionando atributos

const img = document.querySelector("#imagem");
console.log(img);
console.log(img.getAttribute("src")); //Captura o src
console.log(img["src"]); //Captura o src
console.log(img.src); //Captura o src
console.log(img.getAttribute("width")); //Captura o width
console.log(img.getAttribute("alt")); //Captura o alt

function alterarImagem() {
  img.src = "img/grafico.png";
}

const botao2 = document.getElementById("botao");
botao2.addEventListener("click", alterarImagem);

//6. Atributos personalizados

const itemCarrinho = document.getElementById("itens2");
console.log(itemCarrinho.id);
console.log(itemCarrinho.getAttribute("data-quantidade")); //Forma correta de capturar um atributo personalizado

//dataset só funcionará com a nomenclatura "data-" no inicio
console.log(itemCarrinho.dataset.quantidade);
console.log(itemCarrinho.dataset.status);

//7. Adicionando e removendo elementos

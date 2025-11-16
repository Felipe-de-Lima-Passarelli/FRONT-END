const nomes = [
  "Felipe",
  "Patricia",
  "Vanessa",
  "Edeilton",
  "Rute",
  "Sebastião",
];

//Pegar a lista do site
const lista = document.getElementById("lista");

//Pegar o nome atual
const nomeAtual = document.getElementById("nomeAtual");

//Pegar o botão carregar do site
const botaoCarregar = document.getElementById("carregar");

//Pegar o botão pesquisar do site
const botaoPesquisar = document.getElementById("pesquisar");

function carregarLista() {
  lista.innerHTML = "";
  for (i in nomes) {
    // Criar o elemento <li>
    const novoItemLista = document.createElement("li");

    // Adicionar classes, se quiser
    novoItemLista.classList.add("list-group-item");

    // Definir o texto
    novoItemLista.innerHTML = nomes[i];

    // Inserir no UL
    lista.appendChild(novoItemLista);
  }
}

function filtrarLista() {
  if (nomeAtual.value === "") return;
  const nome = nomeAtual.value;

  //Filtrar a lista atual
  let listaFiltrada = Array.from(lista.children).find(
    (li) => li.innerHTML === nome
  );

  if (listaFiltrada === undefined) return;

  //Limpar a lista e deixar apenas o nome pesquisado
  lista.innerHTML = "";
  lista.appendChild(listaFiltrada);
}

botaoPesquisar.addEventListener("click", () => filtrarLista());

botaoCarregar.addEventListener("click", () => carregarLista());

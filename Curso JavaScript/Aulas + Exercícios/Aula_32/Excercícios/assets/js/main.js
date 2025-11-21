entradaTarefa = document.querySelector(".formata_entrada");
botaoTarefa = document.querySelector(".adicionar_tarefa");
botaoTarefa.addEventListener("click", adicionarTarefa);
blocoTarefas = document.querySelector(".tarefas_ul");
botaoApagar = document.querySelectorAll(".botao_tarefa");

for (let botao of botaoApagar) {
  botao.addEventListener("click", removerTarefa);
}

function adicionarTarefa() {
  let novaTarefa = document.createElement("li");
  novaTarefa.innerHTML = entradaTarefa.value;

  let botaoApagar = document.createElement("button");
  botaoApagar.classList.add("botao_tarefa");
  botaoApagar.textContent = "Apagar";
  botaoApagar.addEventListener("click", removerTarefa);

  novaTarefa.appendChild(botaoApagar);
  blocoTarefas.appendChild(novaTarefa);
  entradaTarefa.value = "";
}

function removerTarefa(e) {
  e.target.parentElement.remove();
}

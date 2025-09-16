// Peça uma lista de valores e um valor a ser buscado. Implemente uma busca para encontrar a posição do valor (ou dizer que não existe).

const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const N1 = 5;

if (lista1.indexOf(N1) != 0) {
  console.log(
    `O número ${N1} está na posição ${lista1.indexOf(N1) + 1} da lista`
  );
} else {
  console.log("Número não encontrado na lista");
}

// Retorne todas as posições em que o valor aparece (caso esteja repetido).

const lista2 = [1, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9, 10];
const N2 = 3;
const posicoes = [];

if (lista2.indexOf(N2) != 0) {
  for (let i = lista2.indexOf(N2); i < lista2.length; i++) {
    if (N2 === lista2[i]) {
      posicoes.push(i + 1);
    }
  }
} else {
  console.log("Número não encontrado na lista");
}

console.log(`O número ${N2} está nas posições: ${posicoes}`);

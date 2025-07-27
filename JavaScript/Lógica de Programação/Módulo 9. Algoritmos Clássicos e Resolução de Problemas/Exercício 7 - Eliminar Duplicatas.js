// Peça uma lista de números e remova os valores duplicados.

const lista = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 6, 7, 8, 10, 9];
lista.sort((a, b) => a - b);

for (let i = 0; i < lista.length - 1; i++) {
  while (lista[i] === lista[i + 1]) {
    lista.splice(i, 1);
  }
}

console.log(lista.join(", "));

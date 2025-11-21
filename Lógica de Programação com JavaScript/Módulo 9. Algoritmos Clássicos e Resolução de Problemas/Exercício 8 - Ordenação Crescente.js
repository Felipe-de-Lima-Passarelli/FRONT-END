// Peça uma lista de números e ordene-os em ordem crescente.

const lista = [1, 15, 14, 21, 22, 19, 2, 4, 9, 43, 25];
console.log(lista.sort((a, b) => a - b));

// Ordene em ordem decrescente

console.log(lista.sort((a, b) => b - a));

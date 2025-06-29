// Crie um array com 4 frutas. Substitua a segunda fruta por "kiwi" e exiba o array atualizado.

const frutas = ["Goiaba", "Banana", "Laranja", "Uva"];
frutas[1] = "Kiwi";

console.log(frutas);

// Remova a última fruta com pop() e adicione uma fruta no início com unshift().

frutas.pop();
frutas.unshift("Banana");
console.log(frutas);

// Crie um array clientes inicialmente vazio. Adicione 3 objetos cliente com nome e idade usando push(). Remova o primeiro cliente usando shift(). Exiba o array atualizado.

const clientes = [];
clientes.push({ nome: "Felipe", idade: 25 });
clientes.push({ nome: "Patricia", idade: 31 });
clientes.push({ nome: "Gustavo", idade: 17 });
clientes.shift();
console.log(clientes);

// Adicione um cliente no início do array usando unshift().

clientes.unshift({ nome: "Felipe", idade: 25 });
console.log(clientes);

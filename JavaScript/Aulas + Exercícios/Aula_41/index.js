const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

//.splice(índice, delete)
//Começa no índice 3 e removerá 2 elementos
const removidos = nomes.splice(3, 2);
console.log(nomes, removidos);

//Como o índice de delete é zero, João não será removido ao colocar Luiz dentro
nomes.splice(1, 0, "Luiz"); //Adicione Luiz no índice 1, e joga os demais para o lado
console.log(nomes);

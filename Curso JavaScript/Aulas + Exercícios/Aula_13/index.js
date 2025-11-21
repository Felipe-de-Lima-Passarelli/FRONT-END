const alunos = ["Luiz", "Maria", "João"];
console.log(alunos);
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

alunos.push("Otávio"); // Adicionar ao final
alunos.pop(); // Remover do final
alunos.unshift("Luiza"); // Adicionar no começo
alunos.shift(); // Remover do começo
delete alunos[1]; // Remove o conteúdo mas mantém o index
console.log(alunos);
console.log(alunos.slice(0, 2));
console.log(alunos instanceof Array); // Verifica se alunos é um Array

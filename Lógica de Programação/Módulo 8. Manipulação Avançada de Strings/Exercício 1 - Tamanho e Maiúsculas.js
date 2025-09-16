// Peça ao usuário para digitar uma frase. Mostre a frase em maiúsculas e informe quantos caracteres ela tem (desconsiderando espaços antes e depois).

const frase = "   Hello, World!   ";
console.log(frase.toUpperCase());
console.log(`A frase tem ${frase.trim().length} caracteres`);

// Conte também quantas palavras a frase tem.

console.log(`A frase tem ${frase.trim().split(" ").length} palavras`);
